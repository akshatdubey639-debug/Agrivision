const { getFarmHealth } = require("../service/farmHealth.service");

const getFarmHealthController = async (req, res) => {
    try {

        const userId = req.user._id;

        const health = await getFarmHealth(userId);

        return res.status(200).json({
            success: true,
            data: health
        });

    } catch (error) {

        console.error("Farm Health Error:", error.message);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getFarmHealthController
};