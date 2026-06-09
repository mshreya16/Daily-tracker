export default function HabitList() {
  return (
    <div className="glass-card">
      <h2>Today's Habits</h2>

      <div className="habit-row">
        <input type="checkbox" defaultChecked />
        Java Practice
      </div>

      <div className="habit-row">
        <input type="checkbox" defaultChecked />
        Drink Water
      </div>

      <div className="habit-row">
        <input type="checkbox" />
        Exercise
      </div>

      <div className="habit-row">
        <input type="checkbox" defaultChecked />
        Meditation
      </div>
    </div>
  );
}
