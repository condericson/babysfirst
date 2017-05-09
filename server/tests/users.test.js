import { expect } from 'chai';

import server from '../mockServer/server.mock.js';
import User from '../models/userModel';
import Firsts from '../models/firstsModel';
import UserFactory from '../factories/user.factory.js';
import FirstsFactory from '../factories/firsts.factory.js';

const ENDPOINT = '/users';

// User tests

let testUser;

describe('User endpoint', () => {
  before(async () => {
    await User.remove();
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
        expect(body.birthday).to.equal(testUser.birthday);
        expect(body).to.haveOwnProperty('_id');
        done();
      });
    });
  });

  describe('User login', () => {
    it('should find a user with ', done => {
      server.post(`${ENDPOINT}/login`).send(testUser).end((err, res) => {
        const { body, status } = res;
        expect(status).to.equal(201);
        expect(body.username).to.equal(testUser.username);
        expect(body.birthday).to.equal(testUser.birthday);
        expect(body).to.haveOwnProperty('_id');
        done();
      });
    });
  });
});
