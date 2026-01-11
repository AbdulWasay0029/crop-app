const apiKey = "AIzaSyAk9XfvtlizVTg3JPw82sF66PBX6wh5j0w";

async function checkModels() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            const geminiModels = data.models
                .filter(m => m.name.includes("gemini") && m.supportedGenerationMethods.includes("generateContent"))
                .map(m => m.name);
            console.log("Valid Gemini Models:", geminiModels);
        } else {
            console.log("No models found in response:", data);
        }

    } catch (error) {
        console.error("Error listing models:", error);
    }
}

checkModels();
