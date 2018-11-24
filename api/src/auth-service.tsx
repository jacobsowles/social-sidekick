import auth0 from 'auth0-js';
import history from './history';

class AuthService {
  auth0: auth0.WebAuth;

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'social-sync.auth0.com',
      clientID: '0LtBj1dwfWa6rULZVRTeJsBoWzifuwAR',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid'
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err: any, authResult: any) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  setSession(authResult: any) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    // navigate to the home route
    history.replace('/home');
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    // navigate to the default route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expirationItem = localStorage.getItem('expires_at');
    let expiresAt = JSON.parse(expirationItem ? expirationItem : '');

    return new Date().getTime() < expiresAt;
  }
}

export default AuthService;
