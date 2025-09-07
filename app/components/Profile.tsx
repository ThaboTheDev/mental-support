import { useState } from "react";

export default function Profile() {
  const [points] = useState(0);
  const [sessionsAttended] = useState(0);

  // This would be linked to wallet address and backend or blockchain in real app
  // For demo, points increase by 10 for each attended session

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Your Profile</h2>
      <div>
        <p>Sessions Attended: {sessionsAttended}</p>
        <p>Points Earned: {points}</p>
      </div>
      <p>Attend all your booked sessions to earn points in your wallet!</p>
    </div>
  );
}
