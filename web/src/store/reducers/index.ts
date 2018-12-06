import { combineReducers } from 'redux';
import auth from '@reducers/auth.reducer';
import services from '@reducers/service.reducer';

export default combineReducers({ auth, services });
