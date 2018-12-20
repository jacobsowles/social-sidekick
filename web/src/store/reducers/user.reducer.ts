import { Auth0UserProfile } from 'auth0-js';

import { SET_USER, LOGOUT, UserAction } from '@actions/user.actions';

const userReducer = (state: Auth0UserProfile = null, action: UserAction) => {
  switch (action.type) {
    case SET_USER:
      return action.user;

    case LOGOUT:
      return null;

    default:
      return state;
  }
};

export default userReducer;
