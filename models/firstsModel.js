const mongoose = require('mongoose');

const FirstsSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

const Firsts = mongoose.model('recipes', FirstsSchema);

module.exports = {Firsts};
