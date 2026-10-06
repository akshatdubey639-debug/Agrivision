const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const detectDisease = async (image) => {

    console.log("Image received:", image.originalname);

    const imageBase64 = image.buffer.toString("base64");

    let response;

    // Retry maximum 3 times
    for (let attempt = 1; attempt <= 3; attempt++) {

        try {

            console.log(`Gemini attempt ${attempt}`);

            response = await ai.models.generateContent({
                model: "gemini-3.6-flash",

                contents: [
                    {
                        inlineData: {
                            mimeType: image.mimetype,
                            data: imageBase64
                        }
                    },
                    {
                        text: `
You are an agricultural plant disease detection assistant.

Analyze this plant image and identify:

1. Crop name
2. Disease name
3. Confidence percentage
4. Symptoms
5. Treatment
6. Prevention

Return ONLY valid JSON.

Required format:

{
  "crop": "crop name",
  "disease": "disease name",
  "confidence": 0,
  "symptoms": [],
  "treatment": "treatment",
  "prevention": "prevention"
}

If the disease cannot be identified reliably, use "Unknown".
`
                    }
                ],

                config: {
                    responseMimeType: "application/json"
                }
            });

            // Successful response
            break;

        } catch (error) {

            console.log(
                `Gemini attempt ${attempt} failed:`,
                error.message
            );

            // If last attempt, throw error
            if (attempt === 3) {
                throw error;
            }

            // Wait before retry
            const delay = 2000 * Math.pow(2, attempt - 1);

            console.log(`Retrying after ${delay}ms...`);

            await wait(delay);
        }
    }

    const text = response.text;

    console.log("Gemini Response:", text);

    return JSON.parse(text);
};

module.exports = {
    detectDisease
};