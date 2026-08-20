const { detectDisease } = require("../service/disease.service");
const Disease = require("../model/Disease.model");

const detectDiseaseController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image"
            });
        }

        const result = await detectDisease();

        const diseaseResult = await Disease.create({
            user: req.body.user,
            crop: result.crop,
            imgUrl: "",
            disease: result.disease,
            confidence: result.confidence,
            symptoms: result.symptoms,
            treatment: result.treatment,
            prevention: result.prevention
        });

        return res.status(200).json({
            success: true,
            data: diseaseResult
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Disease detection failed",
            error: error.message
        });
    }
};


// Get all disease history from MongoDB
const getDiseaseHistory = async (req, res) => {
    try {
        const history = await Disease.find();

        return res.status(200).json({
            success: true,
            data: history
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch disease history",
            error: error.message
        });
    }
};


module.exports = {
    detectDiseaseController,
    getDiseaseHistory
};