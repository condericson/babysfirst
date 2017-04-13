import { createStore } from 'redux';

// import the root reducer
import rootReducer from './reducers/indexReducer';

// create an object for the default data

const store = createStore(rootReducer, undefined);

export default store;
