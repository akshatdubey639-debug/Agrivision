
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const getIrrigationRecommendation = async ({
    crop,
    soilType,
    landArea,
    landUnit,
    irrigationMethod,
    growthStage,
    city
}) => {
    const prompt = `
You are an agricultural irrigation guidance assistant.

Farm details:
Crop: ${crop}
Soil type: ${soilType}
Land area: ${landArea} ${landUnit}
Irrigation method: ${irrigationMethod}
Growth stage: ${growthStage || "Not provided"}
Location: ${city || "Not provided"}

Provide general irrigation guidance as JSON with these fields:
{
  "crop": "crop name",
  "irrigationMethod": "method",
  "wateringGuidance": "general watering guidance",
  "frequency": "suggested frequency with suitable caveats",
  "bestTime": "suggested time of day",
  "waterSavingTips": ["tip 1", "tip 2"],
  "precautions": ["precaution 1", "precaution 2"],
  "note": "explain that local weather, crop stage and soil moisture must be checked"
}

Do not invent live weather or soil moisture readings.
Avoid unsupported exact water quantities.
Make clear that recommendations are general guidance and should be
adjusted to local agricultural advice and actual field conditions.
Return only valid JSON.
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
    getIrrigationRecommendation
};
