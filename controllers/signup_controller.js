const joiValidator = require('../utils/joi_validator');
const signupModel = require('../models/signup_model');

//  Signup User
module.exports.userSignup = async (req, res, next) => {

    //  UserIndividuals input data from the req.body.
    const reqBody = {
        //  TODO Your re.body properties here.
    }

    //Validate the "req.dody" using joiValidator function imported.
    const {error, value} = await joiValidator.userSignUpValidator.validate(reqBody);
    //  Check if there is any validation error.
    if (error) {
        return res.status(400).json({
            Error: error.details[0].message,
        });
    }

    //  TODO Your Registration/Signup CODES Here...
};