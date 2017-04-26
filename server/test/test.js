import { expect } from 'chai';
import server from '../mockServer/server.mock';
import User from '../models/userModel';
import UserFactory from '../factories/user.factory';

// User GET:id, GET/logout, POST, POST/login, DELETE:id

const ENDPOINT = '/users';

let testUser;

describe(`POST ${ENDPOINT}`, () => {
  before(async () => {
    await User.remove();
    testUser = await User.create(UserFactory.generate());
  });
  describe('Creating user', () => {
    it('should...', done => {
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
  describe('Logging in user', () => {
    it('should');
  });
});
