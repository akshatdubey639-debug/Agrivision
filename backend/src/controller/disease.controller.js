const {detectDisease} = require("../service/disease.service");

const detectDiseaseController = async (req, res) => {
    try {
        const result = await detectDisease();

        return res.status(200).json({
            success: true,
            data: {
                crop: result.crop,
                disease: result.disease,
                confidence: result.confidence,
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Disease detection failed",
            error: error.message
        });
    }
};

module.exports = {
    detectDiseaseController
};