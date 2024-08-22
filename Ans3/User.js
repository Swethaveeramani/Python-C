const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
  gender: { type: String },
  lastLoginDate: { type: Date },
});

module.exports = mongoose.model('User', userSchema);
