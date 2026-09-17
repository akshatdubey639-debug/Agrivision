const bcrypt = require("bcrypt");
const User = require("../model/User.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


// ================= REGISTER =================

const registeruser = async (req, res) => {
    console.log("Request body:", req.body);

    try {
        const { username, email, password, phone, avatar } = req.body;

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
        return res.status(201).json({
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


// ================= LOGIN =================

const loginuser = async (req, res) => {

    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        // Response
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};


// ================= FORGOT PASSWORD =================

const forgotPassword = async (req, res) => {

    try {

        const { email } = req.body;

        // Check email
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString("hex");

        // Token expiry - 15 minutes
        const resetPasswordExpires = new Date(
            Date.now() + 15 * 60 * 1000
        );

        // Save token and expiry
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetPasswordExpires;

        await user.save();

        // Response
        return res.status(200).json({
            success: true,
            message: "Reset token generated",
            resetToken: resetToken,
            expireAt: resetPasswordExpires
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};


// ================= RESET PASSWORD =================

const resetPassword = async (req, res) => {

    try {

        const { token, newPassword } = req.body;

        // Check required fields
        if (!token || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Token and new password are required"
            });
        }

        // Find user using reset token
        const user = await User.findOne({
            resetPasswordToken: token
        });

        // Invalid token
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid reset token"
            });
        }

        // Check token expiry
        if (
            !user.resetPasswordExpires ||
            user.resetPasswordExpires < new Date()
        ) {
            return res.status(400).json({
                success: false,
                message: "Token is expired"
            });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        );

        // Update password
        user.password = hashedPassword;

        // Remove reset token
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};


// ================= EXPORT =================

module.exports = {
    registeruser,
    loginuser,
    forgotPassword,
    resetPassword
};