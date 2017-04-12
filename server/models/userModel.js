const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  birthday: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model('users', UserSchema);

module.exports = { User };
