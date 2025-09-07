export default function Welcome() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg text-center font-semibold">
        Please connect your wallet uptop to be able to get rewards
      </div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Mental Support App</h1>
      <p className="mb-4">This app helps you book appointments with mental health professionals, track your sessions, and earn rewards.</p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Rewards Dashboard</h2>
        <p>View your earned points, rewards history, and upcoming rewards.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Community Features</h2>
        <p>Share experiences, tips, and support messages with others.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Progress Tracking</h2>
        <p>Visualize your progress over time with charts and milestones.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Feedback System</h2>
        <p>Rate your sessions and provide feedback to improve your experience.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Gamification</h2>
        <p>Earn badges, levels, and complete challenges to stay motivated.</p>
      </section>
    </div>
  );
}