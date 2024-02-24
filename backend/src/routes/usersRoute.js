const express = require('express');
const router = express.Router();
const User = require('../model/User');
const argon2 = require('argon2');
// const jwt = require("jsonwebtoken");

// Route for user registration
router.post('/register', async (req, res) => {
    try {

        const { name, email, mobile, password, confirmPassword } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const hash = await argon2.hash(password);
       
        const newUser = new User({
            name,
            email,
            mobile,
            password: hash
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (await argon2.verify(user.password, password)) {
            return res.status(200).json({ message: "Login successful" });
        }
        res.status(401).json({ message: "Incorrect password" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
