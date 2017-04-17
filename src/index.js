import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './animate.css';

// import components
import Main from './components/Main';
import Splash from './components/splash';
import Login from './components/login';
import Signup from './components/signup';
import Timeline from './components/timeline';
import FirstEntry from './components/firstentry';

// import react router deps

import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Splash} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/firstentry" component={FirstEntry} />
      </Route>
    </Router>
  </Provider>

);

render(router, document.getElementById('root'));
