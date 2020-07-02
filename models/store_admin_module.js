const mongoose = require("mongoose");
const CustomerSchema = require("./customer");


const storeAdminSchema = new mongoose.Schema({
    identifier: { type: String, required: true, unique: true },
    local:{
        phone_number: { type: Number, unique: true },
        first_name: { type: String, default: "Not set"},
        last_name: { type: String, default:"Not set"},
        email: { type: String, default: "Not set"},
        is_active: { type: Boolean, default: 0 },
        password: { type: String },
        api_token: { type: String, required: true }
    },
    google:{
        googleId: { type: String },
        api_token: String,
        user_role: { type: String, default: "store_admin" }
    },
    facebook: {
        facebookId: { type: String },
        //facebook login data
        user_role: {
            type: String,
            default: "store_admin"
        }
    },
    assistants: [
        //StoreAssistant.schema
    ],
    stores: [
        //Store.schema
    ]
}, { timestamp: true });

module.exports = mongoose.model("StoreAdmins", storeAdminSchema);