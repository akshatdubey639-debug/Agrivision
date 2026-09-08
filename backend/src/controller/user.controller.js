const User = require("../model/User.model");

// Get User Profile
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get profile",
            error: error.message
        });
    }
};


// Update User Profile
const updateProfile = async (req, res) => {
    try {
        const { username, phone, avatar } = req.body;

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (username !== undefined) {
            user.username = username;
        }

        if (phone !== undefined) {
            user.phone = phone;
        }

        if (avatar !== undefined) {
            user.avatar = avatar;
        }

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                avatar: user.avatar
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update profile",
            error: error.message
        });
    }
};


module.exports = {
    getProfile,
    updateProfile
};