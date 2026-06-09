export default function Achievements() {
  const habits = JSON.parse(localStorage.getItem("habits")) || [];

  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  const journals = JSON.parse(localStorage.getItem("journalHistory")) || [];

  const getLevel = (count) => {
    if (count >= 10) return "🥇 Gold";

    if (count >= 5) return "🥈 Silver";

    if (count >= 1) return "🥉 Bronze";

    return "🔒 Locked";
  };

  return (
    <div className="glass-card">
      <h2>🏅 Achievement Levels</h2>

      <p>
        Habit Master:
        {getLevel(habits.length)}
      </p>

      <p>
        Goal Setter:
        {getLevel(goals.length)}
      </p>

      <p>
        Journal Keeper:
        {getLevel(journals.length)}
      </p>
    </div>
  );
}
