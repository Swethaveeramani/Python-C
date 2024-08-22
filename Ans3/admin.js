const express = require('express');
const SigninUser = require('../models/SigninUser');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied');

    const users = await SigninUser.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});

module.exports = router;
