const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    Product_Name: { type: String, require:true },
    Product_Category: { type: String, require: true },
    Product_Price: { type: Number, require:true },
});

const product_model = mongoose.model("Product", ProductSchema);
module.exports = product_model;