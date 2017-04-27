'use strict';

/* eslint-disable no-console */

const express = require('express');

const firstRouter = require('./firsts');
const userRouter = require('./users');
const middlewares = require('./config/middlewares');
const constants = require('./config/constants');

require('./config/database');

const app = express();

middlewares(app);

// routers
app.use('/firsts', firstRouter);
app.use('/users', userRouter);

if (!module.parent) {
  app.listen(constants.PORT, err => {
    if (err) {
      console.error('Cannot run');
    } else {
      console.log(`
          Yep this is working 🍺
          App listen on port: ${constants.PORT} 🍕
          Env: ${process.env.NODE_ENV} 🦄
        `);
    }
  });
}

module.exports = app;