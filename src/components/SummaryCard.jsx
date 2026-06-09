export default function SummaryCard() {
  const habits = JSON.parse(localStorage.getItem("habits")) || [];

  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  const journals = JSON.parse(localStorage.getItem("journalHistory")) || [];

  return (
    <div className="glass-card">
      <h2>📈 Your Progress</h2>

      <p>
        Habits:
        {habits.length}
      </p>

      <p>
        Goals:
        {goals.length}
      </p>

      <p>
        Journal Entries:
        {journals.length}
      </p>
    </div>
  );
}
