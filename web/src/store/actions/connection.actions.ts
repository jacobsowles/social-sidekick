import { Action } from 'redux';

export interface ConnectionAction extends Action {
  serviceId: string;
}

export const ADD_CONNECTION_SUCCESS = 'ADD_CONNECTION_SUCCESS';
export const REMOVE_CONNECTION_SUCCESS = 'REMOVE_CONNECTION_SUCCESS';

export const addConnectionSuccess = (serviceId: string): ConnectionAction => ({
  serviceId,
  type: ADD_CONNECTION_SUCCESS
});

export const removeConnectionSuccess = (serviceId: string): ConnectionAction => ({
  serviceId,
  type: REMOVE_CONNECTION_SUCCESS
});
