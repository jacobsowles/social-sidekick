import { Auth0UserProfile } from 'auth0-js';
import { Action } from 'redux';

export interface UserAction extends Action {
  user?: Auth0UserProfile;
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const fetchUserSuccess = (user: Auth0UserProfile): UserAction => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const logout = (): UserAction => ({ type: LOGOUT });
