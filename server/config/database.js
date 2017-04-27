/* eslint-disable no-console */

/**
 * Configuration for the database
 */

import mongoose from 'mongoose';

import constants from './constants';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// If debug run the mongoose debug options
mongoose.set('debug', process.env.MONGOOSE_DEBUG);

// Connect the db with the url provide
try {
  mongoose.connect(constants.MONGO_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });

// /* eslint-disable no-console */

// const mongoose = require('mongoose');

// const DATABASE_URL = require('./config').DATABASE_URL;

// mongoose.Promise = global.Promise;

// mongoose.connect(DATABASE_URL);
// mongoose.set('debug', true);

// mongoose.connection
//   .once('open', () => console.log('MongoDB Running'))
//   .on('error', e => console.log(e));
