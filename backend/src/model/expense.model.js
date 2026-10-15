
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    farm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farm",
      default: null
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Seeds",
        "Fertilizer",
        "Pesticides",
        "Labour",
        "Irrigation",
        "Machinery",
        "Transport",
        "Other"
      ]
    },

    amount: {
      type: Number,
      required: true,
      min: 0.01
    },

    description: {
      type: String,
      trim: true,
      default: ""
    },

    date: {
      type: Date,
      required: true,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const Expense =
  mongoose.models.Expense ||
  mongoose.model("Expense", expenseSchema);

module.exports = Expense;
