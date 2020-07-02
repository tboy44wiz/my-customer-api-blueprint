const express = require('express');
const storeAdminController = require('../controllers/store_admin_controller');

//  Set Up Express Router
const router = express.Router();

//  //  Add a Store_Admin
router.post("/new", storeAdminController.createStoreAdmin);


//  //  Get All Store_Admin
router.get("/", storeAdminController.getAllStoresAdmin);


//  //  Get a Single Store_Admin
router.get("/:customer_ID", storeAdminController.getSingleStoreAdmin);


//  Update a Single Store_Admin
router.put("/:customer_ID", storeAdminController.updateSingleStoreAdmin);


//  Delete a Single Store_Admin
router.delete("/customer_ID", storeAdminController.deleteSingleStoreAdmin);


module.exports = router;