'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const mongoose = require('mongoose');

const FirstsSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  content: {
    type: String
  },
  date: {
    type: String
  },
  image: {
    type: String
  },
  cloudinaryId: {
    type: String
  }
});

let Firsts; // eslint-disable-line

try {
  Firsts = mongoose.model('Firsts');
} catch (e) {
  Firsts = mongoose.model('Firsts', FirstsSchema);
}

exports.default = Firsts;