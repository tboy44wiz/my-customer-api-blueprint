const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    full_name: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    password_confirm: { type: String, require: true },
    contact_phone: { type: String, require: true },
    contact_Address: { type: String, require: true },
    state: { type: String, require: true },
    nationality: { type: String, require: true },
    age: { type: Number, require: true },
    signup_date: { type: Date, require: true },
});

const signupModel = mongoose.model("Signup", signupSchema);

module.exports =  signupModel