import { Service } from '@core/types';

import { FetchServicesAction, FETCH_SERVICES_SUCCESS } from '@actions/service.actions';

const serviceReducer = (state: Service[] = [], action: FetchServicesAction) => {
  switch (action.type) {
    case FETCH_SERVICES_SUCCESS:
      return action.services;

    default:
      return state;
  }
};

export default serviceReducer;
