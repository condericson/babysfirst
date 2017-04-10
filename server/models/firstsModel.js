const mongoose = require('mongoose');

const FirstsSchema = mongoose.Schema({
  userid: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Firsts = mongoose.model('firsts', FirstsSchema);

module.exports = { Firsts };
