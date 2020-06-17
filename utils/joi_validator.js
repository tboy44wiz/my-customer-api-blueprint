const Joi = require('@hapi/joi');


module.exports.userLoginValidator = Joi.object({
    username: Joi.string().min(6).max(50).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
});

module.exports.userSignUpValidator = Joi.object({
    full_name: Joi.string().min(6).required(),
    username: Joi.string().min(6).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
    password_confirm: Joi.ref('Individuals_Password'),
    contact_phone: Joi.string().required(),
    contact_Address: Joi.string().required(),
    state: Joi.string().required(),
    nationality: Joi.string().required(),
    age: Joi.number().required(),
    signup_date: Joi.date().required(),
});

