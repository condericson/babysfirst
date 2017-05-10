'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint-disable no-console */

var _require = require('express');

const Router = _require.Router;


const router = new Router();

router.get('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      res.status(201).json({ message: 'Pinged!' });
    } catch (e) {
      res.status(500).json({ message: 'Error!' });
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

module.exports = router;