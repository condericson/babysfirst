/* eslint-disable no-console */

const express = require('express');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');

require('./config/cloudinary');

const router = express.Router();

const { Firsts } = require('./models/firstsModel');

router.get('/', (req, res) => {
  Firsts.find().sort({ date: -1 }).exec(function(err, first){ // eslint-disable-line
    console.log(err, first);
    if (err) {
      res.status(500).json({ message: 'Error!' });
    }
    res.status(201).json(first);
  });
});

router.get('/:id', (req, res) => {
  Firsts.find((err, first) => {
    if (err) {
      res.status(500).json({ message: 'Error!' });
    }
    return res.status(201).json(first);
  });
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const image = await cloudinary.uploader.upload(req.body.image);
  return Firsts.create({
    date: req.body.date,
    content: req.body.content,
    image: image.url,
    userId: req.body.userId,
  }, (err, first) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error with post' });
    }
    return res.status(201).json(first);
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
