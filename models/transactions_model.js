const mongoose = require('mongoose');


const transactionSchema = mongoose.Schema({
    amount: { type:String, required: true },
    interest: { type: String, default: "Not set" },
    total_amount: { type: String, required: true},
    description: { type: String, default: "Not set" },
    type: { type: String }
});

const transactionModel = mongoose.model("Transactions", transactionSchema);

module.exports = transactionModel;