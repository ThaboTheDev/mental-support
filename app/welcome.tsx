import RewardsDashboard from "./components/RewardsDashboard";
import CommunityFeatures from "./components/CommunityFeatures";
import ProgressTracking from "./components/ProgressTracking";
import FeedbackSystem from "./components/FeedbackSystem";
import Gamification from "./components/Gamification";

export default function Welcome() {
  const samplePoints = 120;
  const sampleRewardsHistory = [
    { date: "2023-07-01", points: 50, description: "Completed first session" },
    { date: "2023-07-10", points: 70, description: "Attended community event" },
  ];

  const sampleMilestones = [
    { title: "First Appointment", achieved: true },
    { title: "5 Sessions Attended", achieved: false },
    { title: "10 Sessions Attended", achieved: false },
  ];

  const sampleBadges = [
    {
      id: "b1",
      name: "Beginner",
      description: "Completed first session",
      earned: true,
    },
    {
      id: "b2",
      name: "Community Helper",
      description: "Active in community",
      earned: false,
    },
  ];

  const sampleChallenges = [
    { id: "c1", title: "Attend 3 sessions in a month", completed: false },
    { id: "c2", title: "Share 5 tips in community", completed: true },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg text-center font-semibold">
        Please connect your wallet uptop to be able to get rewards
      </div>
      <h1 className="text-3xl font-bold">Welcome to the Mental Support App</h1>
      <p>
        This app helps you book appointments with mental health professionals,
        track your sessions, and earn rewards.
      </p>

      <RewardsDashboard
        points={samplePoints}
        rewardsHistory={sampleRewardsHistory}
      />
      <CommunityFeatures />
      <ProgressTracking milestones={sampleMilestones} />
      <FeedbackSystem />
      <Gamification badges={sampleBadges} challenges={sampleChallenges} />
    </div>
  );
}
