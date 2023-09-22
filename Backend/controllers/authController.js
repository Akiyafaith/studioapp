const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Uncomment this line
const User = require('../models/User');

// Get sensitive information from environment variables or a configuration file
const { BCRYPT_SALT_ROUNDS, JWT_SECRET } = process.env; // Make sure JWT_SECRET is properly defined

// Signup controller
exports.signup = async (req, res) => {
  try {
    const { username, password, firstName, lastName, email } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, parseInt(BCRYPT_SALT_ROUNDS));

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '100h' });

    res.status(200).json({ userId: user.id, token }); // Include the token in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
