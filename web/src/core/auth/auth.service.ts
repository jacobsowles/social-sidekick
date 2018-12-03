import auth0, { Auth0DecodedHash, Auth0Error, Auth0UserProfile } from 'auth0-js';
import moment from 'moment';

interface AuthServiceInterface {
  getAccessToken: () => string | undefined;
  getAuth0UserProfile: () => Promise<Auth0UserProfile | null>;
  handleAuthentication: () => void;
  isAuthenticated: () => boolean;
  login: () => void;
  logout: () => void;
}

class AuthService implements AuthServiceInterface {
  private auth0 = new auth0.WebAuth({
    clientID: '0LtBj1dwfWa6rULZVRTeJsBoWzifuwAR',
    domain: 'social-sync.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.getAccessToken = this.getAccessToken.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAuth0UserProfile = this.getAuth0UserProfile.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  public getAccessToken(): string | undefined {
    return localStorage.getItem('access_token') || undefined;
  }

  public getAuth0UserProfile(): Promise<Auth0UserProfile> {
    debugger;
    const accessToken = this.getAccessToken();

    return new Promise((resolve, reject) => {
      debugger;
      if (accessToken) {
        this.auth0.client.userInfo(
          accessToken,
          (error: Auth0Error | null, auth0Userprofile: Auth0UserProfile | null) => {
            debugger;
            if (auth0Userprofile) {
              resolve(auth0Userprofile);
            } else if (error) {
              reject(error.error);
            }
          }
        );
      } else {
        debugger;
        reject('Access token not set.');
      }
    });
  }

  public handleAuthentication(): void {
    debugger;
    this.auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else {
        console.log(err);
      }
    });
  }

  public isAuthenticated(): boolean {
    debugger;
    const expiresAtString = localStorage.getItem('expires_at');

    if (!expiresAtString) {
      return false;
    }

    const expiresAt = parseInt(JSON.parse(expiresAtString), 10);
    const isExpired = moment().valueOf() >= expiresAt;

    return !isExpired;
  }

  public login(): void {
    debugger;
    this.auth0.authorize();
  }

  public logout(): void {
    debugger;
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  private setSession(authResult: Auth0DecodedHash): void {
    debugger;
    if (!authResult.accessToken || !authResult.expiresIn || !authResult.idToken) {
      return;
    }

    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }
}

export default AuthService;
