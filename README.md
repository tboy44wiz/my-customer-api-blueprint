
Install Node in your local system.
### `https://nodejs.org/en/download/`

In the project directory, run the below command to install all dependencies.
### `npm install`

Make sure you have "nodemon" installed globally on your system or else, install nodemon
// Using npm
### `npm install -g nodemon`
// Using yarn
### `yarn add nodemon global`

To start the Node Server, run the below command
### `yarn start`


Runs the root route.<br />
Open [http://localhost:5000/api/](http://localhost:5000/api/) then followed by the sub-route.


The Sun_Routes are as follows:
<br /><br />

<strong>User Login:</strong> <br />
`"/login"`

<strong>User Signup:</strong> <br />
`"/signup"`

<strong>Mobile OTP:</strong> <br />
`"/otp/verify_phone"`

<strong>Retrieve Depts:</strong> <br />
For all depts: `"/depts"` <br />
For today's dept:  `"/depts/todays_date"`

<strong>View Transactions:</strong> <br />
For All transactions: `"/transactions"` <br />
For pending transactions: `"/transactions/pending"` <br />
For today's transactions: `"/transactions/todays_date"` <br />
For upcoming transactions: `"/transactions/upcoming"` <br />
For customer's transaction history: `"/transactions/customer_ID"` <br />
 
<strong>NOTE:</strong> <br />
The `"/product"` route is for sample...


### Folder Structure
<strong>Folder Structure</strong> <br />
>`/my-customer-blueprint` <br />
>>`/config` <br />
>>`/controllers` <br />
>>`/models` <br />
>>`/routes` <br />
>>`/utils` <br />
>
<br />

<strong>/my-customer-blueprint:</strong> This contains all the project files and sub_folders.<br />
<strong>/config:</strong> Contains the configuration files for this project.<br />
<strong>/controllers:</strong> Contains the controllers files for this project.<br />
<strong>/models:</strong> Contains the models or schema files for this project.<br />
<strong>/routes:</strong> Contains the routes files and end_points for this project.<br />
<strong>/utils:</strong> Contains the utils files for this project. Such as: Validation file, custom modules, etc.<br />


Please for more info, contact me on slack with  <strong>`@tMan44wiz`</strong>