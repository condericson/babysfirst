'use strict';

/* eslint-disable no-console */

const express = require('express');

const firstRouter = require('./firsts');
const userRouter = require('./users');
const middlewares = require('./config/middlewares');

require('./config/db');

const app = express();
const PORT = require('./config/config').PORT;

middlewares(app);

// routers
app.use('/firsts', firstRouter);
app.use('/users', userRouter);

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listening on port ${PORT}`);
  }
});

module.exports = app;