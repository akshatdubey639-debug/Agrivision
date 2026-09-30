const { getWeather } = require("../service/weather.service");

const getWeatherController = async (req, res) => {
    try {
        const { city } = req.params;

        const weather = await getWeather(city);

        return res.status(200).json({
            success: true,
            ...weather
        });

    } catch (error) {
        console.error("Weather error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch weather data"
        });
    }
};

module.exports = {
    getWeatherController
};