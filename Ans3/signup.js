const express = require('express');
const bcrypt = require('bcryptjs');
const SignupUser = require('../models/SignupUser');
const SigninUser = require('../models/SigninUser');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSignupUser = new SignupUser({ name, email, password: hashedPassword, gender });
    await newSignupUser.save();
    const newSigninUser = new SigninUser({ name, email, password: hashedPassword, gender, lastLogin: new Date() });
    await newSigninUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

module.exports = router;
