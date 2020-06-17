const express = require('express');
const productController = require('../controllers/product_controller');

const router = express.Router();

//  Get All Products
router.get("/", productController.getAllProducts);

//  Get Single Product
router.get("/:product_ID", productController.getSingleProduct);

module.exports = router;