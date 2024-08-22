const mongoose = require('mongoose');

const SigninUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  count: { type: Number, default: 1 },
  lastLogin: Date,
});

module.exports = mongoose.model('SigninUser', SigninUserSchema, 'signinUsers');
