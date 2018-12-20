import { Action } from 'redux';

import { UserService } from '@core/types';

export interface ServicesAction extends Action {
  services?: UserService[];
}

export const SET_USER_SERVICES = 'SET_USER_SERVICES';

export const setUserServicesState = (services: UserService[]): ServicesAction => ({
  services,
  type: SET_USER_SERVICES
});
