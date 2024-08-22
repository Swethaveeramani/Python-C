const mongoose = require('mongoose');

const SignupUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
});

module.exports = mongoose.model('SignupUser', SignupUserSchema, 'signupUsers');
