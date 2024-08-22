const express = require('express');
const SigninUser = require('../models/SigninUser');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await SigninUser.findById(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).send('Error fetching user data');
  }
});

module.exports = router;
