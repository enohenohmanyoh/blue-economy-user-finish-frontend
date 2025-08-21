import React, { useState } from "react";
import "./OpenAIChat.css";

const OpenAIChat = () => {
  const [collapsed, setCollapsed] = useState(true); // collapsed by default
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = { sender: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/openai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "ai", text: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "Error fetching response." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`chat-container ${collapsed ? "collapsed" : ""}`}>
      <div className="chat-header" onClick={toggleCollapse}>
        {collapsed ? "💬 Chat (Click to Expand)" : "💬 Chat (Click to Collapse)"}
      </div>

      {!collapsed && (
        <>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                <strong>{msg.sender === "user" ? "You:" : "AI:"}</strong> {msg.text}
              </div>
            ))}
            {loading && <div className="chat-message ai">AI is typing...</div>}
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a message..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default OpenAIChat;
