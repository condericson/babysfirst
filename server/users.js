/* eslint-disable */
import User from './models/userModel';

const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const cookieParser = require('cookie-parser');

const router = new Router();

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
  res.status(201).json({ message: 'logging out' });
});

router.post('/', (req, res) => {
  const { password } = req.body;
  User.create(
    {
      username: req.body.username,
      password: req.body.password,
      birthday: req.body.birthday,
    },
    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error with user creation' });
      }
      const returnedValues = {
        username: user.username,
        birthday: user.birthday,
        _id: user._id,
      };
      return res.status(201).json(returnedValues);
    },
  );
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res.status(400).json({ message: 'Incorrect username' });
    } else if (!user.authenticateUser(req.body.password)) {
      return res.status(400).json({ message: 'Incorrect password' });
    }
    return res.status(201).json(user);
  } catch (e) {
    return res.status(400).json(e.message);
  }

  //User.findOne(
  //   {
  //     username: req.body.username,
  //   },
  //   (err, user) => {
  //     if (err) {
  //       console.log('error with post');
  //       return res.status(500).json({ message: 'Error with post' });
  //     }
  //     if (!user) {
  //       console.log("user wasn't found");
  //       return res
  //         .status(500)
  //         .json({ message: 'Incorrect username or password' });
  //     }
  //     if (user.authenticateUser(req.body.password)) {
  //       return res.status(201).json(user);
  //     }
  //   },
  // );
});

router.delete('/:id', async (req, res) => {
  try {
    const user = User.findByIdAndRemove(req.params.id);
    return res.status(201).json(user);
  } catch (e) {
    res
      .status(500)
      .json({ message: `Could not delete user ${req.body.username}` });
  }
});

module.exports = router;
