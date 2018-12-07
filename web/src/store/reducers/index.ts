import { combineReducers } from 'redux';

import connections from '@reducers/connection.reducer';
import services from '@reducers/service.reducer';
import user from '@reducers/user.reducer';

export default combineReducers({ connections, services, user });
