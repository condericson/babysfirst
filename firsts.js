const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

const router = express.Router();

cloudinary.config({
  cloud_name: 'babysfirst',
  api_key: '149535471223848',
  api_secret: '1WnNvoTn2z6nee3iGpnP1R8f8uA',
});

const { Firsts } = require('./models/firstsModel');

router.get('/firsts', (req, res) => {
  Firsts.find((err, first) => {
    if (err) {
      res.status(500).json({ message: 'Error!' });
    }
    return res.status(201).json(first);
  });
});

router.post('/firsts', (req, res) => {
  let image = '';
  cloudinary.uploader.upload('req.body.image', (result) => {
    console.log(result);
    image = result;
  });
  Firsts.create({
    date: req.body.date,
    content: req.body.content,
    image,
    userId: req.body.userId,
  }, (err, first) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error with post' });
    }
    res.status(201).json(first);
  });
});

router.put('/:id', (req, res) => {
  const _id = mongoose.Types.ObjectId(req.params.id);
  Firsts.findOneAndUpdate({
    _id,
  },
    {
      $set: {
        date: req.body.date,
        content: req.body.content,
        image: req.body.image,
        userId: req.body.userId,
      },
    },
    {
      new: true,
    },
    (err, first) => {
      if (err || !first) {
        console.error('Could not update first', req.body.name);
        mongoose.disconnect();
        if (err) {
          return res.status(500).json({
            message: 'Internal Server Error',
          });
        }
      }
      console.log('Updated first on ', first.date);
      res.status(201).json(first);
    });
});

router.delete('/:id', (req, res) => {
  const _id = mongoose.Types.ObjectId(req.params.id);
  Firsts.remove({
    _id,
  }, (err, first) => {
    if (err || !first) {
      console.error('Could not delete first on ', req.body.date);
      mongoose.disconnect();
      return;
    }
    console.log('Deleted first', first.result);
    res.status(201).json(first);
  });
});

module.exports = router;
