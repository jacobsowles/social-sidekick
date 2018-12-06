import { SetErrorAction, SET_ERROR } from '@actions/error.actions';

const errorReducer = (state: string = null, action: SetErrorAction) => {
  switch (action.type) {
    case SET_ERROR:
      return action.error;

    default:
      return state;
  }
};

export default errorReducer;
