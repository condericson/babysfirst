'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

require('../config/database');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _supertest2.default)(_index2.default); /**
                                                              * Mocker the server configuration
                                                              */