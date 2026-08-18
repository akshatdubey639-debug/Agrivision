const bcrypt = require("bcrypt");
const User = require("../model/User.model");

const registeruser = async (req, res) => {
    console.log("Request body:", req.body);
    try {
        const { username, email, password, phone,avatar } = req.body;

        // Check required fields
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Username, password and email are required"
            });
        }

        // Check existing user
        const existinguser = await User.findOne({ email });

        if (existinguser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        const hashedpassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            username,
            email,
            phone,
            password: hashedpassword,
            avatar
           
        });

        // Response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone
            }
        });

    } catch (error) {
        console.error("Register error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = { registeruser };