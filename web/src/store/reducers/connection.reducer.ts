import { Connection } from '@core/types';

import { FetchConnectionsAction, FETCH_CONNECTIONS_SUCCESS } from '@actions/connection.actions';

const connectionReducer = (state: Connection[] = [], action: FetchConnectionsAction) => {
  switch (action.type) {
    case FETCH_CONNECTIONS_SUCCESS:
      return action.connections;

    default:
      return state;
  }
};

export default connectionReducer;
