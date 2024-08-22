const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = '568a1df06b4eafc8e451eec9f138eca3f0bf45f1280e31a6999c184541acd530';

router.post('/signup', async (req, res) => {
  const { name, email, password, gender } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, gender });
    await user.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    user.count += 1;
    user.lastLoginDate = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id, isAdmin: email === 'admin@email.com' }, JWT_SECRET);
    res.json({ token, isAdmin: email === 'admin@email.com' });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
