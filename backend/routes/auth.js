const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Đăng ký user thường
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', username: user.username });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Đăng nhập
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.json({ username: user.username, role: user.role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Kiểm tra quyền admin
router.get('/check-admin', async (req, res) => {
    const { username } = req.query;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ isAdmin: user.role === 'admin' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Thêm admin (route mới)
router.post('/register-admin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, role: 'admin' });
        await user.save();
        res.status(201).json({ message: 'Admin registered successfully', username: user.username });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;