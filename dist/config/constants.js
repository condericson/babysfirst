'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('dotenv').config();

const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  MONGO_URL: process.env.MONGO_URL_DEV
};

const testConfig = {
  JWT_SECRET: 'Dl1-GEamWElpfwM2nhLpDfsv_85edjQF',
  MONGO_URL: 'mongodb://localhost/firstmemories-test'
};

const prodConfig = {
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  MONGO_URL: process.env.MONGO_URL_PROD
};

const defaultConfig = {
  PORT: process.env.PORT || 8080
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

exports.default = Object.assign({}, defaultConfig, envConfig(process.env.NODE_ENV));

// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                       'mongodb://localhost/babysfirst';

// exports.TEST_DATABASE_URL = (
// 	process.env.TEST_DATABASE_URL ||
// 	'mongodb://localhost/test-babysfirst');
// exports.PORT = process.env.PORT || 8080;