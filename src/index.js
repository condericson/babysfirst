import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components
import App from './components/App';
import Splash from './components/splash';
import Login from './components/login';
import Signup from './components/signup';
import Timeline from './components/timeline';
import FirstEntry from './components/firstentry';
import Page404 from './components/Page404';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Splash} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/timeline" component={Timeline} />
        <Route path="/firstentry" component={FirstEntry} />
        <Route path="*" component={Page404} />
      </Route>
    </Router>
  </Provider>
);

render(<Root />, document.getElementById('root'));
