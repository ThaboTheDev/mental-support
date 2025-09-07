import React from "react";

interface ProgressTrackingProps {
  milestones: { title: string; achieved: boolean }[];
}

export default function ProgressTracking({
  milestones,
}: ProgressTrackingProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
      <ul className="space-y-2">
        {milestones.map((milestone, index) => (
          <li
            key={index}
            className={`p-2 rounded ${milestone.achieved ? "bg-green-200" : "bg-gray-200"}`}
          >
            {milestone.title} {milestone.achieved ? "✅" : "⏳"}
          </li>
        ))}
      </ul>
    </div>
  );
}
