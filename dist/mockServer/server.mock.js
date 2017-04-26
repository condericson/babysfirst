'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

require('../../src/config/database');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _supertest2.default)(_server2.default); /**
                                                               * Mocker the server configuration
                                                               */