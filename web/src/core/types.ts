import { Auth0UserProfile } from 'auth0-js';

export interface AppState {
  connections: Connection[];
  services: UserService[];
  user?: Auth0UserProfile;
}

export interface Connection extends DatabaseDocument {
  accessToken: string;
  service: string;
  user: string;
}

interface DatabaseDocument {
  _id: string;
}

export interface Service extends DatabaseDocument {
  name: string;
}

export interface UserService extends Service {
  isConnected: boolean;
}
