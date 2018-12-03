import auth0, { Auth0DecodedHash, Auth0Error, Auth0UserProfile } from 'auth0-js';

class AuthService {
  private auth0 = new auth0.WebAuth({
    clientID: '0LtBj1dwfWa6rULZVRTeJsBoWzifuwAR',
    domain: 'social-sync.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  public isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public handleAuthentication(redirect: any) {
    debugger;
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult, redirect);
        redirect('/home');
      } else if (err) {
        redirect('/home');
        console.log(err);
      }
    });
  }

  public login() {
    debugger;
    this.auth0.authorize();
  }

  public logout(redirect: any) {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    redirect('/');
  }

  public setSession(authResult: any, redirect: any) {
    debugger;
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    redirect('/home');
  }
}

export default AuthService;
