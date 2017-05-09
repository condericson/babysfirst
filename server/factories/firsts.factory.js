/**
 * Create fake first entry for testing
 */

import faker from 'faker';

import BaseFactory from './base.factory';

class FirstsFactory extends BaseFactory {
  /**
   * Create a first
   *
   * @public
   * @param {Object} attrs of first
   * @returns {Object} a fake first
   */
  generate(attrs) {
    return {
      content: faker.lorem.sentences(3),
      date: faker.date.recent(),
      image: faker.image.imageUrl(),
      cloudinaryId: '456def',
      ...attrs,
    };
  }
}

export default new FirstsFactory();
