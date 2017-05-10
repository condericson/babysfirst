/* eslint-disable no-console */

const { Router } = require('express');

const router = new Router();

router.get('/', async (req, res) => {
  try {
    res.status(201).json({ message: 'Pinged!' });
  } catch (e) {
    res.status(500).json({ message: 'Error!' });
  }
});

module.exports = router;
