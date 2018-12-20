import { Auth0UserProfile } from 'auth0-js';
import { Action } from 'redux';

export interface UserAction extends Action {
  user?: Auth0UserProfile;
}

export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const setUserState = (user: Auth0UserProfile): UserAction => ({ type: SET_USER, user });

export const logout = (): UserAction => ({ type: LOGOUT });
