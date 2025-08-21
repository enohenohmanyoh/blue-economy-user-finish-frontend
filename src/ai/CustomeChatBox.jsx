import React, { useState, useEffect } from "react";
import "./CustomChatBox.css"; // make sure you have updated CSS

const CustomChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Load messages from backend when chat opens
  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/messages");
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Error loading messages:", err);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);

    try {
      await fetch("http://localhost:8080/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input, sender: "user" }),
      });

      await fetchMessages();
      setInput("");
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "Bot", text: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="custom-chatbox-container">
      {/* Chat Box */}
      {isOpen && (
        <div className="custom-chatbox open">
          <div className="custom-chatbox-header">
            Chat Assistant 🤖
            <button className="custom-chatbox-close" onClick={toggleChat}>
              ✖
            </button>
          </div>

          <div className="custom-chatbox-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`custom-chatbox-message ${
                  msg.sender === "user" ? "user" : "ai"
                }`}
              >
                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong>{" "}
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="custom-chatbox-message ai">Bot is typing...</div>
            )}
          </div>

          <div className="custom-chatbox-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      {/* Floating label above toggle */}
      {!isOpen && <div className="chat-label">💬 Chat with us!</div>}

      {/* Floating toggle button */}
      <button className="custom-chatbox-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default CustomChatBox;
