const express = require('express');
const otpController = require('../controllers/otp_controller');

//  Set Up Express Router
const router = express.Router();


//  Login an Individual
router.post("/verify_phone", otpController.verifyPhone);

module.exports = router;