import { Auth0UserProfile } from 'auth0-js';

export interface AppState {
  connections: {
    data: Connection[];
    error?: string;
    isFetching: boolean;
  };
  services: Service[];
  user?: Auth0UserProfile;
}

export interface Connection {
  service: string;
}

interface DatabaseDocument {
  _id: string;
}

export interface Service extends DatabaseDocument {
  name: string;
}
