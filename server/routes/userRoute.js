
const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userController');

const router = express.Router();

// Register Route
router.post('/register', registerController);

// Get All Users Route
router.get('/all-users', getAllUsers);

//loginController Route
router.post('/login', loginController);

module.exports = router;
