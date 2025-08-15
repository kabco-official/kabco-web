'use client';
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Globe } from "lucide-react";
import "../css/chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: ["👋 Hello! I can help with farming advice & government schemes."] }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const formatBotReply = (text) => {
    return text
      .split(/(?:\n{2,}|(?<=[.?!])\s+)/)
      .map((part) => part.trim())
      .filter((part) => part.length > 0);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content:
                language === "en"
                  ? "You are a helpful assistant for Indian farmers, providing agricultural advice and government scheme details in English."
                  : "നിങ്ങൾ ഇന്ത്യൻ കർഷകർക്ക് കാർഷിക ഉപദേശങ്ങളും സർക്കാർ പദ്ധതികളുടെ വിവരങ്ങളും നൽകുന്ന സഹായിയായിരിക്കും. എല്ലാ മറുപടികളും മലയാളത്തിലായിരിക്കണം."
            },
            ...messages.map(m => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: Array.isArray(m.text) ? m.text.join(" ") : m.text
            })),
            { role: "user", content: input }
          ],
          temperature: 0.7
        })
      });

      if (!res.ok) throw new Error(`Groq API error: ${res.status}`);

      const data = await res.json();
      const botReplyRaw = data.choices?.[0]?.message?.content || "Sorry, I couldn't understand.";
      const botReplyFormatted = formatBotReply(botReplyRaw);

      setMessages((prev) => [...prev, { sender: "bot", text: botReplyFormatted }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: ["Error fetching response."] }]);
    }

    setLoading(false);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ml" : "en"));
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3>🌾 Farmer Assistant</h3>
            <div className="header-buttons">
              <button className="lang-toggle" onClick={toggleLanguage}>
                <Globe size={12} /> {language === "en" ? "English" : "Malayalam"}
              </button>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`message-row ${msg.sender}`}>
                <div className="message-bubble">
                  {Array.isArray(msg.text)
                    ? msg.text.map((line, idx) => <p key={idx}>{line}</p>)
                    : <p>{msg.text}</p>}
                </div>
              </div>
            ))}
            {loading && (
              <div className="message-row bot">
                <div className="message-bubble typing">⏳ Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="chatbot-footer">
            <input
              type="text"
              placeholder={language === "en" ? "Type your message..." : "നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
