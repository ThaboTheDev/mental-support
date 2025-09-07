import React from "react";

interface RewardsDashboardProps {
  points: number;
  rewardsHistory: { date: string; points: number; description: string }[];
}

export default function RewardsDashboard({
  points,
  rewardsHistory,
}: RewardsDashboardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Rewards Dashboard</h2>
      <p className="mb-2">
        Total Points: <strong>{points}</strong>
      </p>
      <h3 className="font-semibold mb-2">Rewards History</h3>
      <ul className="list-disc list-inside max-h-48 overflow-y-auto">
        {rewardsHistory.map((reward, index) => (
          <li key={index}>
            <span className="font-medium">{reward.date}:</span> {reward.points}{" "}
            points - {reward.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
