import { Auth0UserProfile } from 'auth0-js';

export interface AppState {
  auth: {
    user: Auth0UserProfile | null;
  };
  connections: {
    data: Connection[];
    error?: string;
    isFetching: boolean;
  };
  services: {
    data: Service[];
    error?: string;
    isFetching: boolean;
  };
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
