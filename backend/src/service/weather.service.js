const axios = require("axios");

const getWeather = async (city) => {
    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                appid: process.env.OPENWEATHER_API_KEY,
                units: "metric"
            }
        }
    );

    return {
        city: response.data.name,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        condition: response.data.weather[0].main
    };
};

module.exports = {
    getWeather
};