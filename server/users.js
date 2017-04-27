
const { Router } = require('express');
const bcryptjs = require('bcryptjs');
// const passport = require('passport');
// const BasicStrategy = require('passport-http');
const cookieParser = require('cookie-parser');

const router = new Router();

import User from './models/userModel';

router.use(cookieParser());

router.get('/', async (req, res) => {
  try {
    const user = await User.find({});
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.find({});
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json(e);
  }
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).json({ message: 'Username not found' });
    }
    return res.status(201).json(user);
  });
});

router.get('/logout', (req, res) => {
  // res.clearCookie('babysfirst');
  res.status(201).json({ message: 'logging out' });
});

router.post('/', (req, res) => {
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
        if (err) {
          return res.status(500).json({ message: 'Error with user creation' });
        }
        const returnedValues = {
          username: user.username,
          birthday: user.birthday,
          _id: user._id,
        };
        return res.status(201).json(returnedValues);
      });
    });
  });
});

router.post('/login', (req, res) => {
  const enteredPassword = req.body.password;
  User.findOne({
    username: req.body.username,
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

router.delete('/:id', async (req, res) => {
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

module.exports = router;
