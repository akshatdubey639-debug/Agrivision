const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const getFertilizerRecommendation = async ({
    crop,
    soilType,
    landArea,
    landUnit
}) => {

    const prompt = `
You are an agricultural recommendation assistant.

Provide general fertilizer guidance using these farm details:

Crop: ${crop}
Soil Type: ${soilType}
Land Area: ${landArea} ${landUnit}

Return ONLY valid JSON in this format:

{
    "crop": "crop name",
    "soilType": "soil type",
    "fertilizers": [
        {
            "name": "fertilizer name",
            "quantity": "estimated quantity with unit",
            "purpose": "why it is used"
        }
    ],
    "applicationMethod": "how to apply",
    "timing": "when to apply",
    "precautions": [
        "precaution 1",
        "precaution 2"
    ],
    "note": "Mention that soil testing and local agricultural advice are recommended."
}

Use cautious, crop-specific guidance. Do not invent soil test results.
If information is insufficient for a safe recommendation, explain this in the note.
`;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json"
        }
    });

    return JSON.parse(response.text);
};

module.exports = {
    getFertilizerRecommendation
};