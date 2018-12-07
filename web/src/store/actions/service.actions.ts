import { Action } from 'redux';

import { Service } from '@core/types';

export interface FetchServicesAction extends Action {
  services?: Service[];
}

export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';

export const fetchServicesSuccess = (services: Service[]): FetchServicesAction => ({
  services,
  type: FETCH_SERVICES_SUCCESS
});
