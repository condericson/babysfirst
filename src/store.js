import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

import firsts from './data/firsts';

// create an object for the default data
const defaultState = {
  firsts,
};

const store = createStore(rootReducer, defaultState);

export default store;
