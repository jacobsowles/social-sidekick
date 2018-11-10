import auth0 from 'auth0-js';
import history from 'history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'social-sync.auth0.com',
    clientID: '0LtBj1dwfWa6rULZVRTeJsBoWzifuwAR',
    redirectUri: 'http://localhost:8080/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
