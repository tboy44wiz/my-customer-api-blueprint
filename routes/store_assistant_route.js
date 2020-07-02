const express = require('express');
const storeAssistantController = require('../controllers/store_assistants_controller');

//  Set Up Express Router
const router = express.Router();

//  //  Add a Store
router.post("/new", storeAssistantController.createStoreAssistant);


//  //  Get All Store
router.get("/", storeAssistantController.getAllStoreAssistants);


//  //  Get a Single Store
router.get("/:customer_ID", storeAssistantController.getSingleStoreAssistant);


//  Update a Single Store
router.put("/:customer_ID", storeAssistantController.updateSingleStoreAssistant);


//  Delete a Single Store
router.delete("/customer_ID", storeAssistantController.deleteSingleStoreAssistant);


module.exports = router;