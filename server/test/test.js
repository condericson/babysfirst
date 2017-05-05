import { expect } from 'chai';
import server from '../mockServer/server.mock';
import User from '../models/userModel';
import UserFactory from '../factories/user.factory';

// User GET:id, GET/logout, POST, POST/login, DELETE:id

const ENDPOINT = '/users';

// let testUser;

describe(`POST ${ENDPOINT}`, () => {
  before(async () => {
    await User.remove();
    // testUser = await User.create(UserFactory.generate());
  });
  describe('Creating user', () => {
    it('should create a user and return a 201 status, have an id, a username, and a birthday', done => {
      server.post(ENDPOINT).send(UserFactory.generate()).end((err, res) => {
        const { status, body } = res;
        expect(status).to.equal(201);
        expect(body).to.haveOwnProperty('_id');
        expect(body).to.haveOwnProperty('username');
        expect(body).to.haveOwnProperty('birthday');
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
