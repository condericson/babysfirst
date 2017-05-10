'use strict';

var _chai = require('chai');

var _serverMock = require('../mockServer/server.mock.js');

var _serverMock2 = _interopRequireDefault(_serverMock);

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _userFactory = require('../factories/user.factory.js');

var _userFactory2 = _interopRequireDefault(_userFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const ENDPOINT = '/users';

// User tests

let testUser;

describe('User endpoint', () => {
  before(_asyncToGenerator(function* () {
    yield _userModel2.default.remove();
  }));

  beforeEach(() => {
    testUser = _userFactory2.default.generate();
  });

  describe('User creation with post', () => {
    it('should create a user on post', done => {
      _serverMock2.default.post(ENDPOINT).send(testUser).end((err, res) => {
        const body = res.body,
              status = res.status;

        (0, _chai.expect)(status).to.equal(201);
        (0, _chai.expect)(body.username).to.equal(testUser.username);
        (0, _chai.expect)(body).to.haveOwnProperty('birthday');
        (0, _chai.expect)(body).to.haveOwnProperty('_id');
        done();
      });
    });
  });

  describe('User login', () => {
    it('should find a user with login', done => {
      _serverMock2.default.post(`${ENDPOINT}/login`).send(testUser).end((err, res) => {
        const body = res.body,
              status = res.status;

        (0, _chai.expect)(status).to.equal(201);
        (0, _chai.expect)(body.username).to.equal(testUser.username);
        (0, _chai.expect)(body).to.haveOwnProperty('_id');
        done();
      });
    });
  });
});