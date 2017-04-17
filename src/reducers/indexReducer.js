import { combineReducers } from 'redux';

import firstsReducer from './firstsReducer';
import user from './userReducer';

export default combineReducers({
  user,
});
