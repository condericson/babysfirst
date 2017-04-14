import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import firstsreducer from './firstsReducer';
import usersreducer from './userReducer';

const rootReducer = combineReducers({ firstsreducer, usersreducer, routing: routerReducer });

export default rootReducer;
