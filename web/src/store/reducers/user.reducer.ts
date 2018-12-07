import { Auth0UserProfile } from 'auth0-js';

import { FETCH_USER_SUCCESS, LOGOUT, UserAction } from '@actions/user.actions';

const userReducer = (state: Auth0UserProfile = null, action: UserAction) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.user;

    case LOGOUT:
      return null;

    default:
      return state;
  }
};

export default userReducer;
