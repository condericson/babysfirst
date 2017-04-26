'use strict';

/* eslint-disable no-console */

const mongoose = require('mongoose');

const DATABASE_URL = require('./config').DATABASE_URL;

mongoose.Promise = global.Promise;

mongoose.connect(DATABASE_URL);
mongoose.set('debug', true);

mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', e => console.log(e));