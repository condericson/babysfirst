import React from 'react';

import {render} from 'react-dom';

//import components
import App from './components/App';
import Splash from './components/splash';
import Login from './components/login';
import Signup from './components/signup';
import Timeline from './components/timeline';
import FirstEntry from './components/firstentry';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Splash}></IndexRoute>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/timeline" component={Timeline}></Route>
        <Route path="/firstentry" component={FirstEntry}></Route>
      </Route>
    </Router>
  </Provider>

)


render(router, document.getElementById('root'));
