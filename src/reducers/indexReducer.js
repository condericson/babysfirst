import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import firsts from './firstsReducer';
import users from './userReducer';

const rootReducer = combineReducers({ firsts, users, routing: routerReducer });

export default rootReducer;
