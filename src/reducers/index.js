import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import firsts from './firsts';

const rootReducer = combineReducers({firsts, routing: routerReducer });

export default rootReducer;
