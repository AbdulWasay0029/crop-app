import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyAk9XfvtlizVTg3JPw82sF66PBX6wh5j0w";
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        const modelParams = { filters: "method:generateContent" };
        // The current SDK doesn't expose listModels directly on genAI instance in all versions, 
        // but usually we can try to find a working model by trial. 
        // However, let's try to just run a simple prompt on a few known candidates.

        const candidates = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-001",
            "gemini-1.5-pro",
            "gemini-1.5-pro-001",
            "gemini-pro-vision"
        ];

        console.log("Testing models...");

        for (const modelName of candidates) {
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello");
                console.log(`SUCCESS: ${modelName} works!`);
                return; // We found one
            } catch (e) {
                console.log(`FAILED: ${modelName} - ${e.message.split(':')[0]}`);
            }
        }
    } catch (e) {
        console.error("Fatal error:", e);
    }
}

listModels();
