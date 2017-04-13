/* eslint-disable no-console */

const { Router } = require('express');
const cloudinary = require('cloudinary');

require('./config/cloudinary');
const Firsts = require('./models/firstsModel');

const router = new Router();

router.get('/', async (req, res) => {
  // try {
  //   const first = await Firsts.find({}).sort({ date: -1 }).populate('userId', 'username').exec(err, first);
  //   res.status(201).json(first);
  // } catch (e) {
  //   res.status(201).json(first);
  // }

  // populate('where the id is', 'which part of the object you want to see')
  Firsts.find({}).sort({ date: -1 }).populate('userId', 'username').exec((err, first) => {
    console.log(err, first);
    if (err) {
      res.status(500).json({ message: 'Error!' });
    }
    res.status(201).json(first);
  });
});

router.post('/', async (req, res) => {
  const { date, content, userId } = req.body;
  console.log(req.body);
  try {
    const image = await cloudinary.uploader.upload(req.body.image);
    const first = await Firsts.create({ date, content, image: image.url, userId });
    return res.status(201).json(first);
  } catch (e) {
    return res.status(500).json({ message: 'Error with post' });
  }
});

router.get('/:id', (req, res) => {
  Firsts.find((err, first) => {
    if (err) {
      res.status(500).json({ message: 'Error!' });
    }
    return res.status(201).json(first);
  });
});

router.put('/:id', (req, res) => {
  Firsts.findByIdAndUpdate(req.params.id,
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

router.patch('/:id', async (req, res) => {
  try {
    const first = await Firsts.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json(first);
  } catch (e) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/:id', (req, res) => {
  Firsts.findByIdAndRemove(req.params.id, (err, first) => {
    if (err || !first) {
      console.error('Could not delete first on ', req.body.date);
      return;
    }
    console.log('Deleted first', first.result);
    return res.status(201).json(first);
  });
});

module.exports = router;
