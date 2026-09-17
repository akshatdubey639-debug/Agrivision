const { getWeather } = require("../services/weather.service");

// Get Weather
const weatherController = async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({
                success: false,
                message: "Latitude and longitude are required"
            });
        }

        const latitude = Number(lat);
        const longitude = Number(lon);

        if (
            Number.isNaN(latitude) ||
            Number.isNaN(longitude)
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid latitude or longitude"
            });
        }

        const weather = await getWeather(latitude, longitude);

        return res.status(200).json({
            success: true,
            weather
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to get weather",
            error: error.message
        });
    }
};

module.exports = {
    weatherController
};