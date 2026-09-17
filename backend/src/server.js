const dns = require("dns");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const diseaseRoutes = require("./routes/disease.route");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const cropRoutes = require("./routes/crop.route");



// Use Google DNS for MongoDB Atlas SRV lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/disease", diseaseRoutes);
app.use("/api/crop", cropRoutes);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};


// Home route
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