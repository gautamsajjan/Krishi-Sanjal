// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const router = express.Router();

// // Farmer registration codes
// const FARMER_CODES = ['FARM123', 'KRISHI456'];

// // Signup route
// router.post('/signup', async (req, res) => {
//   try {
//     const { fullName, username, email, phone, password, role, shopName, address, registrationCode } = req.body;

//     // Check farmer registration code if the role is 'farmer'
//     if (role === 'farmer' && !FARMER_CODES.includes(registrationCode)) {
//       return res.status(400).json({ message: 'Invalid registration code' });
//     }

//     const user = new User({ fullName, username, email, phone, password, role, shopName, address, registrationCode });
//     await user.save();

//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Login route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }
    

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// module.exports = router;



const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const dotenv = require('dotenv');

// Get the secret from environment variables
dotenv.config();


// Farmer registration codes
const FARMER_CODES = ['FARM123', 'KRISHI456'];

// Sign Up Route
router.post('/signup', async (req, res) => {
  const { fullName, username, email, phoneNumber, password, role, registrationCode, shopName, address } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // If signup as farmer, check the registration code
    if (role === 'farmer' && !registrationCode) {
      return res.status(400).json({ message: 'Registration code is required for farmers' });
    }
    // Check farmer registration code if the role is 'farmer'
    if (role === 'farmer' && !FARMER_CODES.includes(registrationCode)) {
      return res.status(400).json({ message: 'Invalid registration code' });
    }

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullName,
      username,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      registrationCode: role === 'farmer' ? registrationCode : null,
      shopName: role === 'farmer' ? shopName : null,
      address: role === 'farmer' ? address : null,
    });

    // Save user to DB
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Middleware to protect routes (only for farmers)
const protectFarmerRoute = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Bearer header
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'farmer') {
      return res.status(403).json({ message: 'Access denied, farmers only' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

router.get('/farmer', protectFarmerRoute, (req, res) => {
  res.status(200).json({ message: 'Welcome to the farmer page' });
});

module.exports = router;

