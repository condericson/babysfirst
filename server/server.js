/* eslint-disable no-console */

const express = require('express');
const mongoose = require('mongoose');
const firstRouter = require('./firsts');
const userRouter = require('./users');
const middlewares = require('./config/middlewares');

const app = express();

const { DATABASE_URL, PORT } = require('./config');

middlewares(app);

// routers

app.use('/firsts', firstRouter);
app.use('/users', userRouter);

let server;

function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
        console.log(`Your app is listening on port ${PORT}`);
        resolve();
      })
      .on('error', err => { // eslint-disable-line
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  }));
}
if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { runServer, app, closeServer };
