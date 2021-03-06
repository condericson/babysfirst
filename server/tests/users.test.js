import { expect } from 'chai';

import server from '../mockServer/server.mock.js';
import User from '../models/userModel';
import UserFactory from '../factories/user.factory.js';

const ENDPOINT = '/users';

// User tests

let testUser;
let testUser2;

describe('User endpoint', () => {
  before(async () => {
    await User.remove();
    testUser2 = await User.create(UserFactory.generate());
  });

  beforeEach(() => {
    testUser = UserFactory.generate();
  });

  describe('User creation with post', () => {
    it('should create a user on post', done => {
      server.post(ENDPOINT).send(testUser).end((err, res) => {
        const { body, status } = res;
        expect(status).to.equal(201);
        expect(body.username).to.equal(testUser.username);
        expect(body).to.haveOwnProperty('birthday');
        expect(body).to.haveOwnProperty('_id');
        done();
      });
    });
  });

  describe('User login', () => {
    it('should find a user with login', done => {
      server
        .post(`${ENDPOINT}/login`)
        .send({ username: testUser2.username, password: 'password1' })
        .end((err, res) => {
          const { body, status } = res;
          expect(status).to.equal(201);
          expect(body.username).to.equal(testUser2.username);
          expect(body).to.haveOwnProperty('_id');
          done();
        });
    });
  });
});
