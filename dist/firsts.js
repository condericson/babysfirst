'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* eslint-disable no-console */

var _require = require('express');

const Router = _require.Router;

const cloudinary = require('cloudinary');

require('./config/cloudinary');
const Firsts = require('./models/firstsModel');

const router = new Router();

router.get('/', (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      const first = yield Firsts.find({}).sort({ date: -1 });
      res.status(201).json(first);
    } catch (e) {
      res.status(500).json({ message: 'Error!' });
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.get('/:id', (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    console.log(req.query.offset);
    const skipNumber = parseInt(req.query.offset, 10);
    try {
      const firsts = yield Firsts.find({ userId: req.params.id }).sort({ date: -1 }).skip(skipNumber).limit(5);
      res.status(201).json(firsts);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

router.post('/', (() => {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var _req$body = req.body;
    const date = _req$body.date,
          content = _req$body.content,
          userId = _req$body.userId;

    let image = '';
    let cloudinaryId = '';
    try {
      if (req.body.image) {
        image = yield cloudinary.uploader.upload(req.body.image, function (result) {
          console.log(result);
        }, {
          width: 1000,
          height: 1000,
          crop: 'limit'
        });
        if (image.state === 'rejected') {
          return console.log('Invalid image pathway');
        }
        cloudinaryId = image.public_id;
        image = image.url;
      }
      const first = yield Firsts.create({
        date,
        content,
        userId,
        image,
        cloudinaryId
      });
      return res.status(201).json(first);
    } catch (e) {
      return res.status(500).json({ message: 'Error with post' });
    }
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
})());

// update content
router.put('/:id', (() => {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    const content = req.body.content;

    try {
      const first = yield Firsts.findByIdAndUpdate(req.params.id, { content });
      return res.status(201).json(first);
    } catch (e) {
      return res.status(500).json({ message: 'Error with update' });
    }
  });

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
})());

router.delete('/:id', (req, res) => {
  Firsts.findByIdAndRemove(req.params.id, (err, first) => {
    console.log("here is the first that is being deleted", first);
    if (err || !first) {
      console.error('Could not delete first on ', req.body.date);
      return;
    }
    cloudinary.uploader.destroy(first.cloudinaryId, result => {
      console.log(result);
    });
    return res.sendStatus(200);
  });
});

module.exports = router;