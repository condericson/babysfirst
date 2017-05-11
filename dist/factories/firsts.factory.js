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
 * Create fake first entry for testing
 */

class FirstsFactory extends _base2.default {
  /**
   * Create a first
   *
   * @public
   * @param {Object} attrs of first
   * @returns {Object} a fake first
   */
  generate(attrs) {
    return Object.assign({
      content: _faker2.default.lorem.sentences(3),
      date: _faker2.default.date.recent()
    }, attrs);
  }
}

exports.default = new FirstsFactory();