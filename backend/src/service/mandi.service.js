
const axios = require("axios");

const getMandiPrice = async (crop) => {
    const commodityMap = {
        wheat: 1,
        paddy: 2,
        rice: 3
    };

    const commodityId = commodityMap[crop.toLowerCase()];

    if (!commodityId) {
        throw new Error("Unsupported crop. Try wheat, paddy, or rice.");
    }

    const fromDate = "2025-03-01";
    const toDate = "2025-06-01";
    console.log("MANDI REQUEST START");
    console.log("CEDA URL:", "https://api.ceda.ashoka.edu.in/v1/agmarknet/prices");
console.log("CEDA KEY LOADED:", Boolean(process.env.CEDA_API_KEY));
console.log("DATE RANGE:", fromDate, toDate);

    
    const response = await axios.post(
        
        "https://api.ceda.ashoka.edu.in/v1/agmarknet/prices",
        {
            commodity_id: commodityId,
            state_id: 9,
            from_date: fromDate,
            to_date: toDate 
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.CEDA_API_KEY}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            timeout: 60000
        }
    );
    console.log("MANDI RESPONSE RECEIVED");

    return response.data;
};

module.exports = { getMandiPrice };
