'use strict';

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  birthday: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('users', UserSchema);