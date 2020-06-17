const express = require('express');
const transactionController = require('../controllers/transaction_controller');

//  Set Up Express Router
const router = express.Router();


//  View All Transactions
router.get("/", transactionController.viewAllTransactions);


//  View Pending Transactions
router.get("/pending", transactionController.viewPendingTransactions);


//  View Today's Transactions
router.get("/:date", transactionController.viewTodayTransactions);


//  View Upcoming Transactions
router.get("/upcoming", transactionController.viewUpcomingTransactions);


//  View Transaction History For A Particular Customer
router.get("/:customer_ID", transactionController.viewCustomersTransactions);

module.exports = router;