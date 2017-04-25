const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../server');

const should = chai.should();

chai.use(chaiHttp);

// User GET:id, GET/logout, POST, POST/login, DELETE:id

describe('creation of user', () => {
  const newUser = {
    username: 'stevebot',
    password: 'password01',
    birthday: '01-01-2012',
  };
  return chai.request(app)
    .post('/users')
    .send(newUser)
    .then((res) => {
      res.should.have.status(201);
      // res.should.be.json;
      // res.body.should.be.a('object');
      // res.body.should.include.keys(
      //   'username',
      //   'password',
      //   'birthday',
      // );
      // res.body._id.should.not.be.null;
      // workingId = res.body._id;
    })
    .catch((err) => {
      console.log('RECIPE POST TEST ERR', err);
    });
});
