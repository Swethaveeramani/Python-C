const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SigninUser = require('../models/SigninUser');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await SigninUser.findOne({ email });

    if (!user) return res.status(400).send('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    user.count += 1;
    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id, email: user.email, role: email === 'admin@email.com' ? 'admin' : 'user' }, 'your_jwt_secret');
    res.json({ token, role: email === 'admin@email.com' ? 'admin' : 'user' });
  } catch (error) {
    res.status(500).send('Login failed');
  }
});

module.exports = router;
