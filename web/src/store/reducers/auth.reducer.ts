import { Auth0UserProfile } from 'auth0-js';
import { combineReducers } from 'redux';

import {
  FetchUserAction,
  FETCH_USER_BEGIN,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS
} from '@actions/auth.actions';

interface AuthState {
  error?: string;
  loading: boolean;
  user?: Auth0UserProfile;
}

const initialState: AuthState = {
  error: undefined,
  loading: false,
  user: undefined
};

const userReducer = (state: AuthState = initialState, action: FetchUserAction) => {
  debugger;
  switch (action.type) {
    case FETCH_USER_BEGIN:
      return { ...state, error: undefined, loading: true };

    case FETCH_USER_SUCCESS:
      return { ...state, error: undefined, loading: false, user: action.user };

    case FETCH_USER_FAILURE:
      return { ...state, error: action.error, loading: false, user: undefined };

    default:
      return state;
  }
};

export default combineReducers({ user: userReducer });
