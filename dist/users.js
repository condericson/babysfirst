'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('express');

const Router = _require.Router;

const bcryptjs = require('bcryptjs');
// const passport = require('passport');
// const BasicStrategy = require('passport-http');
const cookieParser = require('cookie-parser');

const router = new Router();

const User = require('./models/userModel');

router.use(cookieParser());

router.get('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      const user = yield User.find({});
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
      const user = yield User.find({});
      res.status(201).json(user);
    } catch (e) {
      res.status(500).json(e);
    }
    User.findById(req.params.id, function (err, user) {
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
      User.create({
        username: req.body.username,
        password: hash,
        birthday: req.body.birthday
      }, (err, user) => {
        console.log(err);
        console.log(user);
        if (err) {
          return res.status(500).json({ message: 'Error with user creation' });
        }
        console.log(user);
        console.log(user.username);
        console.log(user.birthday);
        return res.status(201).json(user);
      });
    });
  });
});

router.post('/login', (req, res) => {
  const enteredPassword = req.body.password;
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error with post' });
    }
    if (!user) {
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
      const user = User.findByIdAndRemove(req.params.id);
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