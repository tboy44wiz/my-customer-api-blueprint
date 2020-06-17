const express = require('express');
const signupController = require('../controllers/signup_controller');

//  Set Up Express Router
const router = express.Router();

//  Login an Individual
router.post("/", signupController.userSignup);

module.exports = router;