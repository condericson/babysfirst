import { combineReducers } from 'redux';

import firsts from './firsts';
import user from './user';

export default combineReducers({
  user,
  firsts,
});
