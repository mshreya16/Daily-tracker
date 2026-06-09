export default function StreakCard({ current, best }) {
  return (
    <div className="glass-card">
      <h2>🔥 Streak Stats</h2>

      <p>
        Current Streak:
        <strong> {current}</strong> days
      </p>

      <p>
        Best Streak:
        <strong> {best}</strong> days
      </p>
    </div>
  );
}
