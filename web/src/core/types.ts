import { Auth0UserProfile } from 'auth0-js';

export interface AppState {
  connections: {
    data: Connection[];
    error?: string;
    isFetching: boolean;
  };
  error?: string;
  services: {
    data: Service[];
    error?: string;
    isFetching: boolean;
  };
  user?: Auth0UserProfile;
}

export interface Connection extends DatabaseDocument {
  service: string;
}

interface DatabaseDocument {
  id: string;
}

export interface EntityState {
  error?: string;
  isFetching: boolean;
}

export interface Service extends DatabaseDocument {
  name: string;
}
