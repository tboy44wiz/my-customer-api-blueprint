const express = require('express');     //  Importing Express Package.
require('dotenv').config();     //  Import Environment variables
require('./config/db_config');   //  Importing the mongoose package.
const morgan = require('morgan');   //  Importing Morgan Package.
const bodyParser = require('body-parser');  //  Import Body-Parser Package.


//  Importing Routes
const userSignup = require('./routes/signup_route');
const userLogin = require('./routes/login_route');
const otpAuth = require('./routes/otp_route');
const getDept = require('./routes/dept_route');
const viewTransactions = require('./routes/transaction_route');
const product = require('./routes/product_route');


//  Set Up Express App
const app = express();


//  parse JSON-encoded bodies and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//  Using Middleware Morgan for logging.
app.use(morgan("combined"));


//  Requesting for imported Routes
app.use('/api/login', userLogin);
app.use('/api/signup', userSignup);
app.use('/api/otp', otpAuth);
app.use('/api/depts', getDept);
app.use('/api/transactions', viewTransactions);
app.use('/api/my_customer', product);



//  Run the Express Server.
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}, Kindly visit http://${HOST}:${PORT}`);
});