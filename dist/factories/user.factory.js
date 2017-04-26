'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _base = require('./base.factory');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create fake user for testing
 */

class UserFactory extends _base2.default {
  /**
   * Create a user
   *
   * @public
   * @param {Object} attrs of user
   * @returns {Object} a fake user
   */
  generate(attrs) {
    return Object.assign({
      username: _faker2.default.internet.userName(),
      password: 'password1',
      birthday: '12/12/2012'
    }, attrs);
  }
}

exports.default = new UserFactory();