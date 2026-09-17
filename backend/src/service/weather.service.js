const getWeatherData = async (lat,lon) => {
    return {
        temperature: 32,
        humidity: 65,
        rainfall: 10,
        windSpeed: 12,
    };
};
module.exports = {
    getWeatherData
};