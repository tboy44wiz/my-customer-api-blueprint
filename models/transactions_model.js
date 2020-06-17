const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    // TODO Fields/Properties Here
});

const transactionModel = mongoose.model("Transactions", transactionSchema);

module.exports = transactionModel;