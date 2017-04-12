
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
// const passport = require('passport');
// const BasicStrategy = require('passport-http');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const USER_COOKIE_NAME = 'babysfirst';
const router = express.Router();

const { User } = require('./models/userModel');

const jsonParser = bodyParser.json();
router.use(morgan('common'));
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
  const _id = mongoose.Types.ObjectId(req.params.id);
  User.findOne({
    _id,
  }, (err, user) => {
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

router.post('/', jsonParser, (req, res) => {
  const password = req.body.password;
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
        if (err) {
          return res.status(500).json({ message: 'Error with user creation' });
        }
        return res.status(201).json(user);
      });
    });
  });
});

router.post('/login', jsonParser, (req, res) => {
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
  const _id = mongoose.Types.ObjectId(req.params.id);
  User.remove({
    _id,
  }, (err, user) => {
    if (err || !user) {
      console.error('Could not delete user', req.body.username);
      mongoose.disconnect();
      return;
    }
    console.log('Deleted user', user.result);
    res.status(201).json(user);
  });
});

module.exports = router;
