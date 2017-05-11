/* eslint-disable import/no-mutable-exports */
import { hashSync, compareSync } from 'bcrypt-nodejs';

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

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});

UserSchema.methods = {
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  /**
   * Hash the user password
   *
   * @private
   * @param {String} password - user password choose
   * @returns {String} password - hash password
   */
  _hashPassword(password) {
    return hashSync(password);
  },
};

let User;

try {
  User = mongoose.model('User');
} catch (e) {
  User = mongoose.model('User', UserSchema);
}

export default User;
