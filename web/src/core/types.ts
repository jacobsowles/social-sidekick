import { Auth0UserProfile } from 'auth0-js';

export interface AppState {
  auth: {
    user: Auth0UserProfile | null;
  };
}
