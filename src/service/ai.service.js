const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile) {

    const contents = [
        {
            inlineData: {
                mimeType: "image/jpeg",
                data: base64ImageFile,
            },
        },
        { text: "Caption this image." },
    ];

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: contents,
        config: {
            systemInstruction: "You are a helpful assistant that writes a caption for an image and also add hashtags give only one caption short and concise",
            userInstruction: "Give a short and concise caption for the image",
        },
    });
    return response.text;
}


module.exports = generateCaption