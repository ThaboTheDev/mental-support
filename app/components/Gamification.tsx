import React from "react";

interface Badge {
  id: string;
  name: string;
  description: string;
  earned: boolean;
}

interface Challenge {
  id: string;
  title: string;
  completed: boolean;
}

interface GamificationProps {
  badges: Badge[];
  challenges: Challenge[];
}

export default function Gamification({
  badges,
  challenges,
}: GamificationProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Gamification</h2>
      <section className="mb-4">
        <h3 className="font-semibold mb-2">Badges</h3>
        <ul className="flex flex-wrap gap-4">
          {badges.map((badge) => (
            <li
              key={badge.id}
              className={`p-2 border rounded ${badge.earned ? "bg-green-200" : "bg-gray-200"}`}
              title={badge.description}
            >
              {badge.name} {badge.earned ? "🏅" : "🔒"}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="font-semibold mb-2">Challenges</h3>
        <ul className="space-y-2">
          {challenges.map((challenge) => (
            <li
              key={challenge.id}
              className={`p-2 rounded ${challenge.completed ? "bg-blue-200" : "bg-gray-200"}`}
            >
              {challenge.title} {challenge.completed ? "✅" : "⏳"}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
