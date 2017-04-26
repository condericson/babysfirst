/**
 * Create fake user for testing
 */

import faker from 'faker';

import BaseFactory from './base.factory';

class UserFactory extends BaseFactory {
  /**
   * Create a user
   *
   * @public
   * @param {Object} attrs of user
   * @returns {Object} a fake user
   */
  generate(attrs) {
    return {
      username: faker.internet.userName(),
      password: 'password1',
      birthday: '12/12/2012',
      ...attrs,
    };
  }
}

export default new UserFactory();
