/* eslint-disable import/no-mutable-exports */

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

let User;

try {
  User = mongoose.model('User');
} catch (e) {
  User = mongoose.model('User', UserSchema);
}

export default User;
