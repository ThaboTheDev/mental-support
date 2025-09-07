import React, { useState } from "react";

export default function CommunityFeatures() {
  const [posts, setPosts] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addPost = () => {
    if (input.trim() !== "") {
      setPosts([input, ...posts]);
      setInput("");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Community Features</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share your experience or tips..."
        />
        <button
          onClick={addPost}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Post
        </button>
      </div>
      <ul className="space-y-2 max-h-48 overflow-y-auto">
        {posts.map((post, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
}
