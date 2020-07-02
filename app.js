const express = require('express');     //  Importing Express Package.
require('dotenv').config();     //  Import Environment variables
require('./config/db_config');   //  Importing the mongoose configuration file.
const morgan = require('morgan');   //  Importing Morgan Package.


//  Importing Routes
const userSignup = require('./routes/signup_route');
const userLogin = require('./routes/login_route');
const otpAuth = require('./routes/otp_route');
const customer = require('./routes/customer_route');
const store = require('./routes/store_route');
const store_admin = require('./routes/store_admin_route');
const store_assistant = require('./routes/store_assistant_route');
const getDept = require('./routes/dept_route');
const transactions = require('./routes/transaction_route');


//  Set Up Express App
const app = express();


//  parse JSON-encoded bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//  Using Middleware Morgan for logging.
app.use(morgan("combined"));


//  Requesting for imported Routes
app.use('/login', userLogin);
app.use('/signup', userSignup);
app.use('/otp', otpAuth);
app.use('/customer', customer);
app.use('/store', store);
app.use('/store_admin', store_admin);
app.use('/store_assistants', store_assistant);
app.use('/depts', getDept);
app.use('/transactions', transactions);



//  Run the Express Server.
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}, Kindly visit http://${HOST}:${PORT}`);
});