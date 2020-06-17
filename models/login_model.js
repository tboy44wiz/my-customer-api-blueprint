const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
});

const loginModel = mongoose.model("Login", loginSchema);

module.exports =  loginModel