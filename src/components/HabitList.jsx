import { useEffect, useState } from "react";

export default function HabitList() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const loadHabits = () => {
      const saved = JSON.parse(localStorage.getItem("habits")) || [];

      setHabits(saved);
    };

    loadHabits();

    window.addEventListener("storage", loadHabits);

    return () => window.removeEventListener("storage", loadHabits);
  }, []);

  return (
    <div className="glass-card">
      <h2>Today's Habits</h2>

      {habits.length === 0 ? (
        <p>No habits added yet.</p>
      ) : (
        habits.map((habit, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
            }}
          >
            {habit.completed ? "✅" : "⬜"} {habit.name}
          </div>
        ))
      )}
    </div>
  );
}
