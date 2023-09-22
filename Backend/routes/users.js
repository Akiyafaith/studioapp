const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const { verifyToken } = require('../middleware/authMiddleware');

// Define API endpoints for users
//router.get('/protected-route', verifyToken, userController.getProtectedResource); // Apply the middleware to this route
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
