import { Auth0UserProfile } from 'auth0-js';
import { Action } from 'redux';

export interface FetchUserAction extends Action {
  error?: string;
  type: string;
  user?: Auth0UserProfile;
}

export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUserBegin = (): FetchUserAction => ({ type: FETCH_USER_BEGIN });

export const fetchUserSuccess = (user: Auth0UserProfile): FetchUserAction => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const fetchUserFailure = (error: string): FetchUserAction => ({
  error,
  type: FETCH_USER_FAILURE
});
