export default function Welcome() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-pink-50 rounded-2xl shadow-md text-pink-800">
      <div className="mb-6 p-4 bg-pink-100 rounded-lg text-pink-700 font-semibold text-center">
        Please connect your wallet uptop to be able to get rewards
      </div>
      <h1 className="text-4xl font-bold mb-4 text-pink-700">
        Welcome to Mental Support App
      </h1>
      <p className="text-lg mb-4">
        This app helps you book appointments with mental health specialists,
        track your sessions attended, and earn points as rewards.
      </p>
      <p className="text-lg">
        Use the tabs to navigate between booking appointments, viewing your
        profile, and joining the community.
      </p>
    </div>
  );
}
