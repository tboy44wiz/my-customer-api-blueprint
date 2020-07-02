const express = require('express');
const customerController = require('../controllers/customer_controller');

//  Set Up Express Router
const router = express.Router();

//  //  Add a Customer
router.post("/new", customerController.createCustomer);


//  //  Get All Customer
router.get("/", customerController.getAllCustomers);


//  //  Get a Single Customer
router.get("/:customer_ID", customerController.getSingleCustomer);


//  Update a Single Customer
router.put("/:customer_ID", customerController.updateSingleCustomer);


//  Delete a Single Customer
router.delete("/customer_ID", customerController.deleteSingleCustomer);


module.exports = router;