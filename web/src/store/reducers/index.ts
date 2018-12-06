import { combineReducers } from 'redux';

import error from '@reducers/error.reducer';
import services from '@reducers/service.reducer';
import user from '@reducers/user.reducer';

export default combineReducers({ error, services, user });
