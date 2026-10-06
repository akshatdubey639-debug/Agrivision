const axios = require("axios");

const getMandiPrice = async (crop) => {
    try {

        const response = await axios.post(
            "https://api.ceda.ashoka.edu.in/v1/agmarknet/prices",
            {
                commodity: crop
            },
            {
                headers: {
                    "x-api-key": process.env.CEDA_API_KEY
                }
            }
        );

        return response.data;

    }  catch (error) {

    console.error(
        "Mandi API Error:",
        error.response?.status,
        error.response?.data || error.message
    );

    throw error;
}
};

module.exports = {
    getMandiPrice
};