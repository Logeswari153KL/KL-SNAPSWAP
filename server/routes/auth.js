const express = require('express');
const router = express.Router();
const user = require('../models/user');



const sendEmail = require('../utils/sendEmail');

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP

    // Save user with OTP and isVerified: false
    const newUser = new User({ username, email, password, otp });
    await newUser.save();

    await sendEmail(email, otp);
    res.status(200).json({ msg: "OTP sent to your email!" });
});

module.exports = router;