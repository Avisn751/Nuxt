const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { blacklistToken } = require('../utils/blacklist');

const signup = async (req, res) => {
    const { firstName, lastName, address, email, dob, password } = req.body;

    try {
        if (!firstName || !lastName || !address || !email || !dob || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstName,
            lastName,
            address,
            email,
            dob,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User registered successfully.', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'User logged in successfully.', token , user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
};

const logout = (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
        // Blacklist the token
        blacklistToken(token);
        res.status(200).json({ message: 'Logged out successfully.' });
    } else {
        res.status(400).json({ message: 'Token not provided.' });
    }
};



module.exports = {
    signup,
    login,
    logout
};
