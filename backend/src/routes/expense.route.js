
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    addExpense,
    getExpenses
} = require("../controller/expense.controller");

// Add a new expense
router.post("/", authMiddleware, addExpense);

// Get logged-in user's expenses
router.get("/", authMiddleware, getExpenses);

module.exports = router;
