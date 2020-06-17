const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    // TODO Fields/Properties Here
});

const otpModel = mongoose.model("OTP_Auth", otpSchema);

module.exports = otpModel;