import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with your API key
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY }); // Ensure your API key is correctly set in your .env file

// Function to ask Gemini
export async function askGemini(prompt) {
    if (!prompt.trim()) {
        return "Please ask a valid question.";
    }

    try {
        console.log("Making API request to Gemini...");

        // Make the API call to generate content
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",  // Specify the model you want to use
            contents: prompt,           // Pass the prompt directly
        });

        // Log the response for debugging
        console.log("API response:", response);

        // Return the generated text from Gemini
        return response.text || "Sorry, I couldn't process that request. Please try again.";
    } catch (error) {
        // Log any errors for debugging
        console.error("Error calling Gemini API:", error);
        return "Sorry, I couldn't process that request. Please try again.";
    }
}

