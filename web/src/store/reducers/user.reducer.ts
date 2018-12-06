import { Auth0UserProfile } from 'auth0-js';

import { FetchUserAction, FETCH_USER_SUCCESS } from '@actions/user.actions';

const userReducer = (state: Auth0UserProfile = null, action: FetchUserAction) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.user;

    default:
      return state;
  }
};

export default userReducer;
