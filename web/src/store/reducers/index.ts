import { combineReducers } from 'redux';

import services from '@reducers/service.reducer';
import user from '@reducers/user.reducer';

export default combineReducers({ services, user });
