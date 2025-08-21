import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const WebSocketDemo = () => {
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      debug: (str) => console.log("STOMP DEBUG:", str),
      onConnect: () => {
        console.log("✅ Connected to WebSocket");
        client.subscribe("/topic/messages", (msg) => {
          setMessages((prev) => [...prev, msg.body]);
        });

        // test hello
        client.publish({ destination: "/app/hello", body: "Hello from React" });
      },
    });

    client.activate();
    setStompClient(client);

    return () => client.deactivate();
  }, []);

  const sendMessage = () => {
    if (stompClient && input.trim()) {
      stompClient.publish({ destination: "/app/hello", body: input });
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>WebSocket Demo Chat</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "200px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "70%", marginRight: "10px" }}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default WebSocketDemo;
