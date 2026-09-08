const dns = require("dns");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const diseaseRoutes = require("./routes/disease.route");
const userRoutes = require("./routes/user.route");
require("dotenv").config();


// Use Google DNS for MongoDB Atlas SRV lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/disease", diseaseRoutes);
app.use("/api/user", userRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

// Auth   routes
const authRoutes = require("./routes/auth.route");

// user routes
const userRoute=require("./routes/user.route")

app.use("/api/auth", authRoutes);



app.use("/api/user",userRoute)


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