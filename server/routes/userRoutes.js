const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserByEmail,
  updateUserName,
  forgotPassword,
  resetPassword,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:email', protect, getUserByEmail);
router.put('/update-name', protect, updateUserName);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;