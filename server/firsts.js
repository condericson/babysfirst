/* eslint-disable no-console */

const { Router } = require('express');
const cloudinary = require('cloudinary');

require('./config/cloudinary');
const Firsts = require('./models/firstsModel');

const router = new Router();

router.get('/', async (req, res) => {
  try {
    const first = await Firsts.find({}).sort({ date: -1 });
    res.status(201).json(first);
  } catch (e) {
    res.status(500).json({ message: 'Error!' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const firsts = await Firsts.find({ userId: req.params.id }).sort({ date: -1 });
    res.status(201).json(firsts);
  } catch (e) {
    res.status(500).json({ message: 'Error!' });
  }
});

router.post('/', async (req, res) => {
  const { date, content, userId } = req.body;
  try {
    const image = await cloudinary.uploader.upload(req.body.image);
    const first = await Firsts.create({ date, content, image: image.url, userId });
    return res.status(201).json(first);
  } catch (e) {
    return res.status(500).json({ message: 'Error with post' });
  }
});

// update content
router.put('/:id', async (req, res) => {
  const { content } = req.body;
  try {
    const first = await Firsts.findByIdAndUpdate(req.params.id, { content });
    return res.status(201).json(first);
  } catch (e) {
    return res.status(500).json({ message: 'Error with update' });
  }
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
