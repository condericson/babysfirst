'use strict';

var _userModel = require('./models/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('express');

const Router = _require.Router;

const bcryptjs = require('bcryptjs');
// const passport = require('passport');
// const BasicStrategy = require('passport-http');
const cookieParser = require('cookie-parser');

const router = new Router();

router.use(cookieParser());

router.get('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      const user = yield _userModel2.default.find({});
      res.status(201).json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.get('/:id', (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      const user = yield _userModel2.default.find({});
      res.status(201).json(user);
    } catch (e) {
      res.status(500).json(e);
    }
    _userModel2.default.findById(req.params.id, function (err, user) {
      if (err) {
        res.status(500).json({ message: 'Username not found' });
      }
      return res.status(201).json(user);
    });
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

router.get('/logout', (req, res) => {
  // res.clearCookie('babysfirst');
  res.status(201).json({ message: 'logging out' });
});

router.post('/', (req, res) => {
  const password = req.body.password;

  if (password.length < 3) {
    return res.status(500).json({ message: 'Invalid username or password' });
  }
  bcryptjs.genSalt(10, (err, salt) => {
    if (err) {
      res.status(500).json({ message: 'Error with salt' });
    }
    bcryptjs.hash(password, salt, (err, hash) => {
      if (err) {
        return res.status(500).json({ message: 'Error with encryption' });
      }
      _userModel2.default.create({
        username: req.body.username,
        password: hash,
        birthday: req.body.birthday
      }, (err, user) => {
        if (err) {
          return res.status(500).json({ message: 'Error with user creation' });
        }
        const returnedValues = {
          username: user.username,
          birthday: user.birthday,
          _id: user._id
        };
        return res.status(201).json(returnedValues);
      });
    });
  });
});

router.post('/login', (req, res) => {
  const enteredPassword = req.body.password;
  _userModel2.default.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) {
      console.log('error with post');
      return res.status(500).json({ message: 'Error with post' });
    }
    if (!user) {
      console.log("user wasn't found");
      return res.status(500).json({ message: 'Incorrect username or password' });
    }
    if (bcryptjs.compareSync(enteredPassword, user.password)) {
      return res.status(201).json(user);
    }
  });
});

router.delete('/:id', (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      const user = _userModel2.default.findByIdAndRemove(req.params.id);
      return res.status(201).json(user);
    } catch (e) {
      res.status(500).json({ message: `Could not delete user ${req.body.username}` });
    }
    // User.findByIdAndRemove(req.params.id, (err, user) => {
    //   if (err || !user) {
    //     return console.error('Could not delete user', req.body.username);
    //   }
    //   console.log('Deleted user', user.result);
    //   return res.status(201).json(user);
    // });
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})());

module.exports = router;