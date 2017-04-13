
const { Router } = require('express');
const bcryptjs = require('bcryptjs');
// const passport = require('passport');
// const BasicStrategy = require('passport-http');
const cookieParser = require('cookie-parser');

const USER_COOKIE_NAME = 'babysfirst';
const router = new Router();

const User = require('./models/userModel');

router.use(cookieParser());

router.get('/', (req, res) => {
  User.find((err, user) => {
    if (err) {
      res.status(500).json({ message: 'Error!' });
    }
    return res.status(201).json(user);
  });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).json({ message: 'Username not found' });
    }
    return res.status(201).json(user);
  });
});

router.get('/logout', (req, res) => {
  res.clearCookie('babysfirst');
  res.status(201).json({ message: 'logging out' });
});

router.post('/', (req, res) => {
  console.log('BODY', req.body);
  const { password } = req.body;
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
        birthday: req.body.birthday,
      }, (err, user) => {
        console.log(err);
        console.log(user);
        if (err) {
          return res.status(500).json({ message: 'Error with user creation' });
        }
        return res.status(201).json(user);
      });
    });
  });
});

router.post('/login', (req, res) => {
  const enteredpassword = req.body.password;
  User.findOne({
    username: req.body.username,
  }, (err, user) => {
    if (err) {
      res.status(500).json({ message: 'Invalid....' });
      return;
    }
    if (!user) {
      res.status(500).json({ message: 'Incorrect username or password' });
    }
    if (bcryptjs.compareSync(enteredpassword, user.password)) {
      res.cookie(USER_COOKIE_NAME, user._id, {});
      // console.log(document.cookie);
      res.status(201).json({ message: 'Password accepted' });
    }
  });
});

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err || !user) {
      return console.error('Could not delete user', req.body.username);
    }
    console.log('Deleted user', user.result);
    return res.status(201).json(user);
  });
});

module.exports = router;
