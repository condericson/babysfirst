import { expect } from 'chai';

import server from '../mockServer/server.mock.js';
import User from '../models/userModel';
import Firsts from '../models/firstsModel';
import UserFactory from '../factories/user.factory.js';
import FirstsFactory from '../factories/firsts.factory.js';

const ENDPOINT = '/users';

// User tests

let testUser;
let testFirst;

describe('User endpoint', () => {
  before(async () => {
    await User.remove();
    await Firsts.remove();
    testUser = await User.create(UserFactory.generate());
  });

  beforeEach(() => {
    testFirst = FirstsFactory.generate({ userId: testUser._id });
  });

  describe('User creation with post', () => {
    it('should create a user on post', done => {
      server.post(ENDPOINT).send(testUser).end((err, res) => {
        const { body, status } = res;
        expect(status).to.equal(201);
        done();
      });
    });
  });
});
