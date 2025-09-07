import { useState } from "react";

export default function Profile() {
  const [points] = useState<number>(0);
  const [sessionsAttended] = useState<number>(0);

  // This would be linked to wallet address and backend or blockchain in real app
  // For demo, points increase by 10 for each attended session

  return (
    <div className="space-y-6 bg-pink-50 p-6 rounded-2xl shadow-md text-pink-800">
      <h2 className="text-2xl font-bold text-pink-700">Your Profile</h2>
      <div className="space-y-2 text-lg">
        <p>
          <strong>Sessions Attended:</strong> {sessionsAttended}
        </p>
        <p>
          <strong>Points Earned:</strong> {points}
        </p>
      </div>
      <p className="text-pink-600">
        Attend all your booked sessions to earn points in your wallet!
      </p>
    </div>
  );
}
