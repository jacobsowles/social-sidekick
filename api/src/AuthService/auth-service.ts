import auth0 from 'auth0-js';
import history from '../History/history';

class AuthService {
  private auth0: auth0.WebAuth;

  constructor() {
    this.auth0 = new auth0.WebAuth({
      clientID: '0LtBj1dwfWa6rULZVRTeJsBoWzifuwAR',
      domain: 'social-sync.auth0.com',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  public handleAuthentication() {
    this.auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
      }
    });
  }

  public isAuthenticated() {
    const expiresAtString = localStorage.getItem('expires_at');

    if (!expiresAtString) {
      return false;
    }

    const expiresAt = parseInt(JSON.parse(expiresAtString), 10);

    new Date().getTime();

    return new Date().getTime() < expiresAt;
  }

  public login() {
    this.auth0.authorize();
  }

  public logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    history.replace('/');
  }

  private setSession(authResult: any) {
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    history.replace('/home');
  }
}

export default AuthService;
