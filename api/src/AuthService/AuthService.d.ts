import auth0 from 'auth0-js';

declare class AuthService {
  private auth0: auth0.WebAuth;
  constructor();
  public handleAuthentication(): void;
  public isAuthenticated(): boolean;
  public login(): void;
  public logout(): void;
  private setSession(authResult: any): void;
}

export default AuthService;
