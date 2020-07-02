const mongoose = require("mongoose");
const TransactionsSchema = require("./transactions_model").schema;


const customerSchema = mongoose.Schema({
    customer_name: { type: String, required: true },
    customer_phone_number: { type: String, default: "Not set" },
    customer_email: { type: String, default: "Not set" },
    customer_transactions: [
        TransactionsSchema
    ]
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);