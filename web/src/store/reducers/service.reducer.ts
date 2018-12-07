import { UserService } from '@core/types';

import { FETCH_SERVICES_FOR_USER_SUCCESS, ServicesAction } from '@actions/service.actions';

const serviceReducer = (state: UserService[] = [], action: ServicesAction) => {
  switch (action.type) {
    case FETCH_SERVICES_FOR_USER_SUCCESS:
      return action.services;

    default:
      return state;
  }
};

export default serviceReducer;
