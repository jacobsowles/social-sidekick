import auth0 from 'auth0-js';

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
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public handleAuthentication(redirect: any) {
    debugger;
    this.auth0.parseHash((err, authResult) => {
      debugger;
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
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

  public setSession(authResult: any) {
    debugger;
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }
}

export default AuthService;
