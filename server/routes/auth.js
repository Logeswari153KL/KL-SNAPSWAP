const express = require('express');
const router = express.Router();
const User = require('../models/user');

// SIGNUP ROUTE
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Simple check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: "User already exists" });

        const newUser = new User({ username, email, password });
        await newUser.save();
        
        res.status(201).json({ msg: "User registered! Now verify your email." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

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