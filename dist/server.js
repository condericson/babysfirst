'use strict';

var _constants = require('./config/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express'); /* eslint-disable no-console */


const firstRouter = require('./firsts');
const userRouter = require('./users');
const middlewares = require('./config/middlewares');

require('./config/database');

const app = express();

middlewares(app);

// routers
app.use('/firsts', firstRouter);
app.use('/users', userRouter);

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

module.exports = app;