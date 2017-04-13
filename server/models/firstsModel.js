const mongoose = require('mongoose');

const FirstsSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
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

module.exports = mongoose.model('firsts', FirstsSchema);
