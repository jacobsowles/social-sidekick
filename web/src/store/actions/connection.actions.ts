import { Action } from 'redux';

import { Connection } from '@core/types';

export interface FetchConnectionsAction extends Action {
  connections?: Connection[];
}

export const FETCH_CONNECTIONS_SUCCESS = 'FETCH_CONNECTIONS_SUCCESS';

export const fetchConnectionsSuccess = (connections: Connection[]): FetchConnectionsAction => ({
  connections,
  type: FETCH_CONNECTIONS_SUCCESS
});
