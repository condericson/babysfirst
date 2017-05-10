'use strict';

var _chai = require('chai');

var _serverMock = require('../mockServer/server.mock.js');

var _serverMock2 = _interopRequireDefault(_serverMock);

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _firstsModel = require('../models/firstsModel');

var _firstsModel2 = _interopRequireDefault(_firstsModel);

var _userFactory = require('../factories/user.factory.js');

var _userFactory2 = _interopRequireDefault(_userFactory);

var _firstsFactory = require('../factories/firsts.factory.js');

var _firstsFactory2 = _interopRequireDefault(_firstsFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const ENDPOINT = '/firsts';

// User tests

let testUser;
let testFirst;

describe('Firsts endpoint', () => {
  before(_asyncToGenerator(function* () {
    yield _userModel2.default.remove();
    yield _firstsModel2.default.remove();
    testUser = yield _userModel2.default.create(_userFactory2.default.generate());
  }));

  beforeEach(() => {
    testFirst = _firstsFactory2.default.generate({ userId: testUser._id });
  });

  describe('First creation with post', () => {
    it('should create a first on post', done => {
      _serverMock2.default.post(ENDPOINT).send(testFirst).end((err, res) => {
        const body = res.body,
              status = res.status;

        console.log("HERE IS RES", res);
        (0, _chai.expect)(status).to.equal(201);
        (0, _chai.expect)(body.content).to.equal(testFirst.content);
        (0, _chai.expect)(body).to.haveOwnProperty('date');
        (0, _chai.expect)(body.image).to.equal(testFirst.image);
        (0, _chai.expect)(body.cloudinaryId).to.equal(testFirst.cloudinaryId);
        (0, _chai.expect)(body.userId).to.equal(testUser._id);
        done();
      });
    });
  });

  describe('First deletion', () => {
    it('should delete a first', done => {
      _serverMock2.default.post(ENDPOINT).delete(`${ENDPOINT}/${testFirst._id}`).end((err, res) => {
        const status = res.status;

        (0, _chai.expect)(status).to.equal(200);
        done();
      });
    });
  });
});