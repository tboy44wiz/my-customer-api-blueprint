const mongoose = require("mongoose");
const CustomerSchema = require("../models/customer_model").schema;


const storeAssistantSchema = new mongoose.Schema({
    phone_number: { type: Number },
    first_name: { type: String, default: "Not set"},
    last_name: { type: String, default:"Not set"},
    email: { type: String, default: "Not set"},
    is_active: { type: Boolean, default: 1 },
    user_role: {
        type: String,
        default: "store_assistant"
    }
}, { timestamp: true });

module.exports = mongoose.model("StoreAssistants", storeAssistantSchema);