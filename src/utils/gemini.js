import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

export async function askGemini(prompt) {
    if (!prompt.trim()) {
        return "Please ask a valid question.";
    }

    try {
        console.log("Making API request to Gemini...");

        const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
            contents: [{ parts: [{ text: prompt }] }]
        });

        console.log("API response:", response.data); // Log API response for debugging

        // Ensure response structure is valid before accessing
        if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            return response.data.candidates[0].content.parts[0].text;
        } else {
            console.warn("Unexpected API response format:", response.data);
            return "Sorry, I couldn't understand that.";
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error.response?.data || error.message);
        return "Sorry, I couldn't process that request. Please try again.";
    }
}

