import { Action } from 'redux';

import { UserService } from '@core/types';

export interface ServicesAction extends Action {
  services?: UserService[];
}

export const FETCH_SERVICES_FOR_USER_SUCCESS = 'FETCH_SERVICES_FOR_USER_SUCCESS';

export const fetchServicesForUserSuccess = (services: UserService[]): ServicesAction => ({
  services,
  type: FETCH_SERVICES_FOR_USER_SUCCESS
});
