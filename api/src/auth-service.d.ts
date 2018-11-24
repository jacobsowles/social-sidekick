import auth0 from 'auth0-js';

declare class AuthService {
  auth0: auth0.WebAuth;
  constructor();
  handleAuthentication(): void;
  setSession(authResult: any): void;
  login(): void;
  logout(): void;
  isAuthenticated(): boolean;
}

export default AuthService;
