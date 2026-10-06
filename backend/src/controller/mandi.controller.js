const { getMandiPrice } = require("../service/mandi.service");

const getMandiPriceController = async (req, res) => {
      console.log("MANDI CONTROLLER CALLED");
    try {
        
        const { crop } = req.params;

        if (!crop) {
            return res.status(400).json({
                success: false,
                message: "Crop is required"
            });
        }

        const data = await getMandiPrice(crop);

        return res.status(200).json({
            success: true,
            crop,
            data
        });

    } catch (error) {
    console.log("MANDI ERROR:", error.response?.data || error.message);

    return res.status(500).json({
        success: false,
        message: "Unable to fetch mandi prices",
        error: error.response?.data || error.message
    });
}
};

module.exports = {
    getMandiPriceController
};