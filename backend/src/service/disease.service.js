const detectDisease = async () => {
    return {
        crop: "Tomato",
        disease: "Early Blight",
        confidence: 92.5,
        symptoms: [
            "Dark, sunken lesions on leaves",
            "Yellowing of leaves",
        ],
        treatment: "Remove affected leaves and apply fungicide",
        prevention: "Rotate crops and avoid overhead watering"
    };
};

module.exports = {
    detectDisease
};