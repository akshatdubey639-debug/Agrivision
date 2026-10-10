const {
    getFertilizerRecommendation
} = require("../service/fertilizer.service");

const getFertilizerRecommendationController = async (req, res) => {
    try {
        const { crop, soilType, landArea, landUnit } = req.body;

        // Required fields validate karo
        if (!crop || !soilType || !landArea || !landUnit) {
            return res.status(400).json({
                success: false,
                message: "Crop, soil type, land area and land unit are required"
            });
        }

        // Land area valid honi chahiye
        if (Number(landArea) <= 0 || !Number.isFinite(Number(landArea))) {
            return res.status(400).json({
                success: false,
                message: "Land area must be a valid positive number"
            });
        }

        // Gemini AI se recommendation lo
        const recommendation = await getFertilizerRecommendation({
            crop: crop.trim(),
            soilType: soilType.trim(),
            landArea: Number(landArea),
            landUnit: landUnit.trim()
        });

        return res.status(200).json({
            success: true,
            data: recommendation
        });

    } catch (error) {
        console.error("Fertilizer Recommendation Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to generate fertilizer recommendation"
        });
    }
};

module.exports = {
    getFertilizerRecommendationController
};