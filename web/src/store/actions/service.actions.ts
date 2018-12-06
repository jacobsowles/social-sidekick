import { Action } from 'redux';

import { Service } from '@core/types';

export interface FetchServicesAction extends Action {
  error?: string;
  services?: Service[];
}

export const FETCH_SERVICES_BEGIN = 'FETCH_SERVICES_BEGIN';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

export const fetchServicesBegin = (): FetchServicesAction => ({ type: FETCH_SERVICES_BEGIN });

export const fetchServicesSuccess = (services: Service[]): FetchServicesAction => ({
  services,
  type: FETCH_SERVICES_SUCCESS
});

export const fetchServicesFailure = (error: string): FetchServicesAction => ({
  error,
  type: FETCH_SERVICES_FAILURE
});
