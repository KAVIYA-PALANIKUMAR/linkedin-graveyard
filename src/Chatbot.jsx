import React, { useState, useEffect } from "react";
import { askGemini } from "./utils/gemini";
import "./chatbot.css"; // Updated CSS file

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Toggle state

    useEffect(() => {
        const initialMessage = {
            text: "Hi! I'm here to help you learn about protection, cybersecurity, and prevention. What would you like to know? <br><br>You can ask about:<br>- Cybersecurity<br>- How to prevent hacking <br>- 2FA (Two-Factor Authentication)",
            sender: "bot",
            isHTML: true,
        };
        setMessages([initialMessage]);
    }, []);

    const handleAsk = async () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { text: input, sender: "user" }]);
        setLoading(true);
        setInput("");

        try {
            const reply = await askGemini(input);
            const formattedReply = formatResponse(reply);

            setMessages((prev) => [
                ...prev,
                { text: formattedReply, sender: "bot", isHTML: true },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { text: "Error: Could not process request", sender: "bot" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chatbot-widget">
            {isOpen ? (
                <div className="chat-container">
                    <div className="chat-header">
                        Cybersecurity Chatbot
                        <button className="close-button" onClick={() => setIsOpen(false)}>
                            ×
                        </button>
                    </div>
                    <div className="chat-box">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                            >
                                {msg.isHTML ? (
                                    <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                                ) : (
                                    msg.text
                                )}
                            </div>
                        ))}
                        {loading && (
                            <div className="message bot-message loading-dots">Thinking</div>
                        )}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                            placeholder="Type your message..."
                            disabled={loading}
                        />
                        <button onClick={handleAsk} disabled={loading || !input.trim()}>
                            {loading ? "..." : "Send"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="chat-icon" onClick={() => setIsOpen(true)}>
                    💬 {/* Replace with an icon */}
                </div>
            )}
        </div>
    );
}

function formatResponse(text) {
    if (!text) return "No response received.";

    // Convert line breaks into <br> for better readability
    text = text.replace(/\n/g, "<br>");

    // Convert Markdown-style bold (**bold**) to HTML <strong>
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Convert Markdown-style italics (*italic*) to HTML <em>
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Convert simple lists (- Item) into <ul><li>...</li></ul>
    text = text.replace(/- (.*?)(<br>|$)/g, "<li>$1</li>");
    text = text.replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>");

    return text;
}

export default Chatbot;