import { Action } from 'redux';

export interface SetErrorAction extends Action {
  error?: string;
}

export const SET_ERROR = 'SET_ERROR';

export const setError = (error?: string): SetErrorAction => ({ error, type: SET_ERROR });
