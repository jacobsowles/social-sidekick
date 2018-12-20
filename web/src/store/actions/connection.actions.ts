import { Action } from 'redux';

export interface ConnectionAction extends Action {
  serviceId: string;
}

export const ADD_CONNECTION = 'ADD_CONNECTION';
export const REMOVE_CONNECTION = 'REMOVE_CONNECTION';

export const addConnection = (serviceId: string): ConnectionAction => ({
  serviceId,
  type: ADD_CONNECTION
});

export const removeConnection = (serviceId: string): ConnectionAction => ({
  serviceId,
  type: REMOVE_CONNECTION
});
