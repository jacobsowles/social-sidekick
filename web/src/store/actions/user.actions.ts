import { Auth0UserProfile } from 'auth0-js';
import { Action } from 'redux';

export interface FetchUserAction extends Action {
  user?: Auth0UserProfile;
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const fetchUserSuccess = (user: Auth0UserProfile): FetchUserAction => ({
  type: FETCH_USER_SUCCESS,
  user
});
