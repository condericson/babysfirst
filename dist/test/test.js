'use strict';

var _userModel = require('../models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

var _user = require('../factories/user.factory');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

const expect = chai.expect;


chai.use(chaiHttp);

// User GET:id, GET/logout, POST, POST/login, DELETE:id

describe('creation of user', () => {
  before(_asyncToGenerator(function* () {
    yield _userModel2.default.remove();
    testUser = yield _userModel2.default.create(_user2.default.generate());
  }));
  const newUser = {
    username: 'stevebot',
    password: 'password01',
    birthday: '01-01-2012'
  };
  return chai.request(app).post('/users').send(newUser).then(res => {
    expect(res.status).to.equal(200);

    // res.should.be.json;
    // res.body.should.be.a('object');
    // res.body.should.include.keys(
    //   'username',
    //   'password',
    //   'birthday',
    // );
    // res.body._id.should.not.be.null;
    // workingId = res.body._id;
  }).catch(err => {
    console.log('Firsts POST TEST ERR', err);
  });
});