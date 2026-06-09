import { useState, useEffect } from "react";

export default function HabitList() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const savedHabits = JSON.parse(localStorage.getItem("habits")) || [];

    setHabits(savedHabits);
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
