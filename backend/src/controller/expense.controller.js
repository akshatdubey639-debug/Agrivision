
const Expense = require("../model/expense.model");

// Add a new expense
const addExpense = async (req, res) => {
    try {
        const { category, amount, description, date, farm } = req.body;

        if (!category || amount === undefined || amount === null) {
            return res.status(400).json({
                success: false,
                message: "Category and amount are required"
            });
        }

        const validCategories = [
            "Seeds",
            "Fertilizer",
            "Pesticides",
            "Labour",
            "Irrigation",
            "Machinery",
            "Transport",
            "Other"
        ];

        const numericAmount = Number(amount);

        if (!validCategories.includes(category)) {
            return res.status(400).json({
                success: false,
                message: "Invalid expense category"
            });
        }

        if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Amount must be a positive number"
            });
        }

        const expenseData = {
            user: req.user.userId,
            category,
            amount: numericAmount,
            description:
                typeof description === "string" ? description.trim() : ""
        };

        if (date) {
            const parsedDate = new Date(date);

            if (Number.isNaN(parsedDate.getTime())) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid expense date"
                });
            }

            expenseData.date = parsedDate;
        }

        if (farm) {
            expenseData.farm = farm;
        }

        const expense = await Expense.create(expenseData);

        return res.status(201).json({
            success: true,
            message: "Expense added successfully",
            data: expense
        });
    } catch (error) {
        console.error("Add Expense Error:", error);

        if (error.name === "ValidationError" || error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid expense data"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Failed to add expense"
        });
    }
};

// Get logged-in user's expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({
            user: req.user.userId
        }).sort({ date: -1 });

        return res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });
    } catch (error) {
        console.error("Get Expenses Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch expenses"
        });
    }
};

module.exports = {
    addExpense,
    getExpenses
};
