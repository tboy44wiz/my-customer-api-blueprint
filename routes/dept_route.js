const express = require('express');
const deptController = require('../controllers/dept_controller');

//  Set Up Express Router
const router = express.Router();

//  Get All Dept
router.get("/", deptController.getAllDept);

//  Get Today's Dept
router.get("/:date", deptController.getTodayDept);


module.exports = router;