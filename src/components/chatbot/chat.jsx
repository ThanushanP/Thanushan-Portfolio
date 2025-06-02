import React, { useState, useRef, useEffect } from "react";
import "./chat.css";

const apiUrl = process.env.REACT_APP_API_URL_TWO;

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setLoading(true);

    try {
      const res = await fetch(`${apiUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: data.response || "Sorry, I couldn't answer that.",
        },
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Error contacting the server." },
      ]);
    }
    setInput("");
    setLoading(false);
  };

  function renderMessageText(text) {
    // Simpler regex: match URLs, allow trailing punctuation
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) =>
      urlRegex.test(part) ? (
        <a key={i} href={part}>
          {part}
        </a>
      ) : (
        part
      )
    );
  }

  return (
    <>
      <div
        className="chatbot-fab"
        onClick={() => setOpen((prev) => !prev)}
        title="Q&A Chatbot"
      >
        <span role="img" aria-label="chat">
          💬
        </span>
        <span className="chatbot-label">Q&amp;A Chatbot</span>
      </div>
      {open && (
        <div className="chatbot-overlay">
          <div className="chatbot-header">
            <span>Q&amp;A Chatbot</span>
            <button className="chatbot-close" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <div className="chatbot-body" ref={bodyRef}>
            <div className="chatbot-messages">
              {messages.length === 0 && (
                <div className="chatbot-placeholder">How can I help you?</div>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`chatbot-message chatbot-message-${msg.sender}`}
                >
                  {msg.sender === "bot"
                    ? renderMessageText(msg.text)
                    : msg.text}
                </div>
              ))}
              {loading && (
                <div className="chatbot-message chatbot-message-bot">
                  <span className="chatbot-loading">
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </span>
                </div>
              )}
            </div>
            <form className="chatbot-input-bar" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
              />
              <button type="submit" disabled={loading || !input.trim()}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
