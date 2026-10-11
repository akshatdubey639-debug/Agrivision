
const {
    getIrrigationRecommendation
} = require("../service/irrigation.service");

const getIrrigationRecommendationController = async (req, res) => {
    try {
        const {
            crop,
            soilType,
            landArea,
            landUnit,
            irrigationMethod,
            growthStage,
            city
        } = req.body || {};

        // Required fields validation
        if (
            !crop?.trim() ||
            !soilType?.trim() ||
            landArea === undefined ||
            landArea === null ||
            !landUnit?.trim() ||
            !irrigationMethod?.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Crop, soil type, land area, land unit and irrigation method are required"
            });
        }

        // Validate land area
        const area = Number(landArea);

        if (!Number.isFinite(area) || area <= 0) {
            return res.status(400).json({
                success: false,
                message: "Land area must be a valid positive number"
            });
        }

        const recommendation = await getIrrigationRecommendation({
            crop: crop.trim(),
            soilType: soilType.trim(),
            landArea: area,
            landUnit: landUnit.trim(),
            irrigationMethod: irrigationMethod.trim(),
            growthStage: typeof growthStage === "string"
                ? growthStage.trim()
                : "",
            city: typeof city === "string" ? city.trim() : ""
        });

        return res.status(200).json({
            success: true,
            data: recommendation
        });

    } catch (error) {
        console.error("Irrigation Recommendation Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to generate irrigation recommendation"
        });
    }
};

module.exports = {
    getIrrigationRecommendationController
};
