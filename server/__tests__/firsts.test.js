import { expect } from 'chai';

import server from '../mockServer/server.mock.js';
import User from '../models/userModel';
import Firsts from '../models/firstsModel';
import UserFactory from '../factories/user.factory.js';
import FirstsFactory from '../factories/firsts.factory.js';

const ENDPOINT = '/firsts';

// User tests

let testUser;
let testFirst;

describe('Firsts endpoint', () => {
  before(async () => {
    await User.remove();
    await Firsts.remove();
    testUser = await User.create(UserFactory.generate());
  });

  beforeEach(() => {
    testFirst = FirstsFactory.generate({ userId: testUser._id });
  });

  describe('First creation with post', () => {
    it('should create a first on post', done => {
      server.post(ENDPOINT).send(testFirst).end((err, res) => {
        const { body, status } = res;
        console.log('HERE IS RES', body);
        expect(status).to.equal(201);
        expect(body.content).to.equal(testFirst.content);
        expect(body).to.haveOwnProperty('date');
        expect(body.cloudinaryId).to.equal(testFirst.cloudinaryId);
        expect(body).to.haveOwnProperty('_id');
        done();
      });
    });
  });

  describe('First deletion', () => {
    it('should delete a first', done => {
      server
        .post(ENDPOINT)
        .delete(`${ENDPOINT}/${testFirst._id}`)
        .end((err, res) => {
          const { status } = res;
          expect(status).to.equal(200);
          done();
        });
    });
  });
});
