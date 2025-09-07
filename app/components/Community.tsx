import { useState, useRef, useEffect } from "react";

export default function Community() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "System",
      text: "Welcome to the community chat! Be kind and supportive.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      user: "You",
      text: input.trim(),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-pink-50 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-pink-700">Community Chat</h2>
      <div className="flex-grow overflow-auto border border-pink-300 rounded-lg p-6 mb-6 bg-white shadow-sm">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-3 text-pink-800">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <textarea
        className="border border-pink-300 rounded-lg p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message here..."
      />
      <button
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
