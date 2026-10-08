const Farm = require("../model/Farm.model");
const Disease = require("../model/Disease.model");

const getFarmHealth = async (userId) => {

    // User ki farm find karo
    const farm = await Farm.findOne({
        user: userId
    });

    if (!farm) {
        throw new Error("Farm not found");
    }

    // User ki disease history find karo
    const diseases = await Disease.find({
        user: userId
    });

    // Initial score
    let healthScore = 100;

    // Disease risk ke basis par score reduce
    if (diseases.length > 0) {
        healthScore -= 20;
    }

    // Irrigation check
    if (!farm.irrigationType) {
        healthScore -= 15;
    }

    // Soil check
    if (!farm.soilType) {
        healthScore -= 15;
    }

    // Status decide karo
    let status;

    if (healthScore >= 80) {
        status = "Good";
    } else if (healthScore >= 60) {
        status = "Moderate";
    } else {
        status = "Poor";
    }

    return {
        healthScore,
        status,
        factors: {
            weather: "Good",
            soil: farm.soilType ? "Good" : "Unknown",
            irrigation: farm.irrigationType ? "Good" : "Unknown",
            diseaseRisk: diseases.length > 0 ? "Medium" : "Low"
        }
    };
};

module.exports = {
    getFarmHealth
};