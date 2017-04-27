'use strict';

var _chai = require('chai');

var _server = require('../mockServer/server.mock');

var _server2 = _interopRequireDefault(_server);

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _user = require('../factories/user.factory');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// User GET:id, GET/logout, POST, POST/login, DELETE:id

const ENDPOINT = '/users';

let testUser;

describe(`POST ${ENDPOINT}`, () => {
  before(_asyncToGenerator(function* () {
    yield _userModel2.default.remove();
    testUser = yield _userModel2.default.create(_user2.default.generate());
  }));
  describe('Creating user', () => {
    it('should create a user and return a 201 status, have an id, a username, and a birthday', done => {
      _server2.default.post(ENDPOINT).send(_user2.default.generate()).end((err, res) => {
        const status = res.status,
              body = res.body;

        (0, _chai.expect)(status).to.equal(201);
        (0, _chai.expect)(body).to.haveOwnProperty('_id');
        (0, _chai.expect)(body).to.haveOwnProperty('username');
        (0, _chai.expect)(body).to.haveOwnProperty('birthday');
        done();
      });
    });
  });
  // describe('Logging in user', () => {
  //   it('should log the user in a return a 201 status, have an id, a username, and a birthday', done => {
  //     const testUser = UserFactory.generate();
  //     server.post(ENDPOINT).send(testUser);
  //     server.post(`${ENDPOINT}/login`).send(testUser).end((err, res) => {
  //       const { status, body } = res;
  //       expect(status).to.equal(201);
  //       expect(body).to.haveOwnProperty('_id');
  //       expect(body).to.haveOwnProperty('username');
  //       expect(body).to.haveOwnProperty('birthday');
  //       done();
  //     });
  //   });
  // });
});