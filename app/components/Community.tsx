import React, { useState, useEffect, useRef } from "react";

interface ChatMessage {
  id: string;
  userId: string;
  message: string;
  timestamp: number;
}

const dummyChats: ChatMessage[] = [
  {
    id: "1",
    userId: "user1",
    message: "Hello! How can I help you today?",
    timestamp: Date.now() - 60000,
  },
  {
    id: "2",
    userId: "user2",
    message: "I am looking for some support.",
    timestamp: Date.now() - 30000,
  },
];

export default function Community() {
  const [messages, setMessages] = useState<ChatMessage[]>(dummyChats);
  const [input, setInput] = useState('');
  const [userId, setUserId] = useState('user' + Math.floor(Math.random() * 10000));
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === '') return;
    const newMessage: ChatMessage = {
      id: (messages.length + 1).toString(),
      userId,
      message: input.trim(),
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Community Chat</h2>
      <div className="border border-gray-300 rounded-lg p-4 h-64 overflow-y-auto bg-pink-50 shadow-inner">
        {messages.map(msg => (
          <div key={msg.id} className={`mb-2 ${msg.userId === userId ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${msg.userId === userId ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-800'}`}> 
              <strong>{msg.userId}</strong>: {msg.message}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        rows={3}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
        placeholder="Type your message here..."
      />
      <button
        className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-lg transition mt-2"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}