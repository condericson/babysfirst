/* eslint-disable no-console */

const { Router } = require('express');
const cloudinary = require('cloudinary');

require('./config/cloudinary');
const Firsts = require('./models/firstsModel').default;

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
  console.log(req.query.offset);
  const skipNumber = parseInt(req.query.offset, 10);
  try {
    const firsts = await Firsts.find({ userId: req.params.id })
      .sort({ date: -1 })
      .skip(skipNumber)
      .limit(5);
    res.status(201).json(firsts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post('/', async (req, res) => {
  const { date, content, userId } = req.body;
  let image = '';
  const cloudinaryId = '';
  try {
    if (req.body.image !== undefined) {
      image = await cloudinary.uploader.upload(
        req.body.image,
        result => {
          console.log(result);
        },
        {
          width: 1000,
          height: 1000,
          crop: 'limit',
        },
      );
      if (image.state === 'rejected') {
        return console.log('Invalid image pathway');
      }
      // cloudinaryId = image.public_id;
      image = image.url;
    }
    const first = await Firsts.create({
      date,
      content,
      userId,
      image,
      cloudinaryId,
    });
    return res.status(201).json(first);
  } catch (e) {
    return res.status(500).json(e.message);
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

router.delete('/:id', (req, res) => {
  Firsts.findByIdAndRemove(req.params.id, (err, first) => {
    if (err || !first) {
      console.error('Could not delete first on ', req.body.date);
      return;
    }
    if (first.cloudinaryId) {
      cloudinary.uploader.destroy(first.cloudinaryId, result => {
        console.log(result);
      });
    }

    return res.sendStatus(200);
  });
});

module.exports = router;
