import { Auth0UserProfile } from 'auth0-js';

export interface AppState {
  connections: Connection[];
  services: Service[];
  user?: Auth0UserProfile;
}

export interface Connection extends DatabaseDocument {
  service: string;
  user: string;
}

interface DatabaseDocument {
  _id: string;
}

export interface Service extends DatabaseDocument {
  name: string;
}
