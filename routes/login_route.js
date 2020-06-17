const express = require('express');
const loginController = require('../controllers/login_controller');

//  Set Up Express Router
const router = express.Router();

//  Login User
router.post("/", loginController.userLogin);

module.exports = router;