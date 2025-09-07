import React, { useState } from "react";

export default function FeedbackSystem() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitFeedback = () => {
    if (rating > 0) {
      // Here you would handle sending feedback to backend or state
      setSubmitted(true);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Feedback System</h2>
      {submitted ? (
        <p className="text-green-600">Thank you for your feedback!</p>
      ) : (
        <>
          <div className="mb-2">
            <label className="block mb-1">Rate your session:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="border rounded p-1"
            >
              <option value={0}>Select rating</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Good</option>
              <option value={4}>4 - Very Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block mb-1">Comments:</label>
            <textarea
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border rounded p-2"
              placeholder="Additional feedback..."
            />
          </div>
          <button
            onClick={submitFeedback}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </>
      )}
    </div>
  );
}
