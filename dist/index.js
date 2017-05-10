'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _constants = require('./config/constants');

var _constants2 = _interopRequireDefault(_constants);

var _firsts = require('./firsts');

var _firsts2 = _interopRequireDefault(_firsts);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _middlewares = require('./config/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./config/database'); /* eslint-disable no-console */

const app = (0, _express2.default)();

(0, _middlewares2.default)(app);

// routers
app.use('/firsts', _firsts2.default);
app.use('/users', _users2.default);
app.use('/ping');

if (!module.parent) {
  app.listen(_constants2.default.PORT, err => {
    console.log('THESE ARE THE CONSTANTS', _constants2.default);
    if (err) {
      console.error('Cannot run');
    } else {
      console.log(`
          Yep this is working 🍺
          App listen on port: ${_constants2.default.PORT} 🍕
          Env: ${process.env.NODE_ENV} 🦄
        `);
    }
  });
}

exports.default = app;