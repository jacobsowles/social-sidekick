import { Service, EntityState } from '@core/types';

import {
  FetchServicesAction,
  FETCH_SERVICES_BEGIN,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS
} from '@actions/service.actions';

interface ServicesState extends EntityState {
  data?: Service[];
}

const initialState: ServicesState = {
  data: [],
  error: undefined,
  isFetching: false
};

const serviceReducer = (state: ServicesState = initialState, action: FetchServicesAction) => {
  switch (action.type) {
    case FETCH_SERVICES_BEGIN:
      return { ...state, error: undefined as string, isFetching: true };

    case FETCH_SERVICES_SUCCESS:
      return { ...state, error: undefined as string, isFetching: false, data: action.services };

    case FETCH_SERVICES_FAILURE:
      return { ...state, error: action.error, isFetching: false, data: [] as Service[] };

    default:
      return state;
  }
};

export default serviceReducer;
