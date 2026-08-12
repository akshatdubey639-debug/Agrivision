const dns = require("dns");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Use Google DNS for MongoDB Atlas SRV lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

app.get("/", (req, res) => {
    res.json({
        message: "AgriVision AI Backend is running!"
    });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();