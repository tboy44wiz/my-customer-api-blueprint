const mongoose = require("mongoose");
const CustomerSchema = require("../models/customer_model").schema;


const storeSchema = new mongoose.Schema({
    store_name: { type: String, required: true },
    phone_number: { type: String },
    tagline: { type: String },
    shop_address: { type: String, required: true },
    email: { type: String, default: "Not set" },
    customers: [
        CustomerSchema
    ]
}, { timestamp: true });

module.exports = mongoose.model("Stores", storeSchema);