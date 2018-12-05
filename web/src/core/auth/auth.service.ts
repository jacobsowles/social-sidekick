import auth0, { Auth0DecodedHash, Auth0Error, Auth0UserProfile } from 'auth0-js';

interface IAuthService {
  isAuthenticated: () => boolean;
  fetchUser: (callback: ((error: Auth0Error | null, user: Auth0UserProfile) => void)) => void;
  handleAuthentication: (redirect: (location: string) => void) => void;
  login: () => void;
  logout: (redirect: (location: string) => void) => void;
}

class AuthService implements IAuthService {
  private auth0 = new auth0.WebAuth({
    clientID: '0LtBj1dwfWa6rULZVRTeJsBoWzifuwAR',
    domain: 'social-sync.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') as string);
    return new Date().getTime() < expiresAt;
  }

  public fetchUser(callback: ((error: Auth0Error | null, user: Auth0UserProfile) => void)): void {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      console.log('Access Token must exist to fetch user');
    }

    this.auth0.client.userInfo(accessToken as string, callback);
  }

  public handleAuthentication(redirect: (location: string) => void) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        redirect('/postauth');
      } else if (err) {
        redirect('/home');
        console.log(err);
      }
    });
  }

  public login() {
    this.auth0.authorize();
  }

  public logout(redirect: (location: string) => void) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    redirect('/');
  }

  private setSession(authResult: Auth0DecodedHash) {
    if (authResult.expiresIn && authResult.accessToken && authResult.idToken) {
      const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
    }
  }
}

export default AuthService;
