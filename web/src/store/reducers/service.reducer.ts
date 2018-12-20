import { UserService } from '@core/types';

import {
  ADD_CONNECTION_SUCCESS,
  ConnectionAction,
  REMOVE_CONNECTION_SUCCESS
} from '@actions/connection.actions';
import { SET_USER_SERVICES, ServicesAction } from '@actions/service.actions';

const serviceReducer = (state: UserService[] = [], action: ServicesAction | ConnectionAction) => {
  switch (action.type) {
    case ADD_CONNECTION_SUCCESS:
      return state.map((service: UserService) => {
        if (service._id === (action as ConnectionAction).serviceId) {
          return { ...service, isConnected: true };
        }
        return service;
      });

    case SET_USER_SERVICES:
      return (action as ServicesAction).services;

    case REMOVE_CONNECTION_SUCCESS:
      return state.map((service: UserService) => {
        if (service._id === (action as ConnectionAction).serviceId) {
          return { ...service, isConnected: false };
        }
        return service;
      });

    default:
      return state;
  }
};

export default serviceReducer;
