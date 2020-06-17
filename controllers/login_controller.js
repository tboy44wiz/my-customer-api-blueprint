const joiValidator = require('../utils/joi_validator');
const loginModel = require('../models/login_model');

//  Login User
module.exports.userLogin = async (req, res, next) => {

    //  Destructuring all the UserIndividuals input data from the req.body.
    const {userName, password} = req.body;

    const reqBody = {
        username: userName,
        password: password,
    };

    //Validate the "reqBody" object using joiValidator function imported.
    const {error, value} = await joiValidator.userLoginValidator.validate(reqBody);
    //  Check if there is any validation error.
    if (error) {
        return res.status(400).json({
            Error: error.details[0].message,
        });
    }

    //  Get userIndividual with the Individuals_Email.
    await loginModel.findOne({
        where: {username: value.username,}
    })
        .then((userIndividual) => {
            //  Check if userIndividual exists.
            if (userIndividual !== null) {
                //  Compare the password from the validated JoiValidator and the password from the DB
                if(value.password === userIndividual.password) {
                    res.status(200).json({
                        Message: "Congratulations!!! You're logged in successfully.",
                        Status: true,
                    });
                } else {
                    res.json({
                        Message: "Invalid Password.",
                        Status: false,
                    });
                }
            } else {
                res.json({
                    Message: "Invalid email",
                    Status: false,
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                Error: error,
            });
        });
};