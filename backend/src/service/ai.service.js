const { GoogleGenAI } = require("@google/genai");


const ai = new GoogleGenAI({});

const generateCaption = async (base64ImageFile) => {

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
            systemInstruction: `
You are a professional social media content creator and caption writer. 
Your job is to look at the provided image and generate a short, creative, and emotionally engaging caption that fits the mood, context, and elements visible in the image. 
Keep the caption within 5-12 words. Avoid generic phrases. Add emojis if they enhance the vibe. Do not describe the image literally — make it fun, witty, or touching depending on the content.
`
        }
    });
       return response.text || "No caption generated.";
}

module.exports = generateCaption

