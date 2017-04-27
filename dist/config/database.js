'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the warning with Promise
/* eslint-disable no-console */

/**
 * Configuration for the database
 */

_mongoose2.default.Promise = global.Promise;

// If debug run the mongoose debug options
_mongoose2.default.set('debug', process.env.MONGOOSE_DEBUG);

// Connect the db with the url provide
try {
  _mongoose2.default.connect(_constants2.default.MONGO_URL);
} catch (err) {
  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);
}

_mongoose2.default.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
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