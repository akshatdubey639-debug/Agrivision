const dns = require("dns");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();



const diseaseRoutes = require("./routes/disease.route");
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const cropRoutes = require("./routes/crop.route");
const farmRoute=require("./routes/farm.route")
const weatherRoutes = require("./routes/weather.route");
const mandiRoutes = require("./routes/mandi.route");
const farmHealthRoutes = require("./routes/farmHealth.route");
const fertilizerRoutes = require("./routes/fertilizer.route");





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
app.use("/api/farm",farmRoute)
app.use("/api/weather", weatherRoutes);
app.use("/api/mandi", mandiRoutes);
app.use("/api/farm-health", farmHealthRoutes);
app.use("/api/fertilizer", fertilizerRoutes);


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