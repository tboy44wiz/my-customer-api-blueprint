const express = require('express');
const storeController = require('../controllers/store_controller');

//  Set Up Express Router
const router = express.Router();

//  //  Add a Store
router.post("/new", storeController.createStore);


//  //  Get All Store
router.get("/", storeController.getAllStores);


//  //  Get a Single Store
router.get("/:customer_ID", storeController.getSingleStore);


//  Update a Single Store
router.put("/:customer_ID", storeController.updateSingleStore);


//  Delete a Single Store
router.delete("/customer_ID", storeController.deleteSingleStore);


module.exports = router;