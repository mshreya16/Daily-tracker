import { useState, useEffect } from "react";
import { markTodayActive } from "../utils/activityTracker";
import {
  updateTodayHistory
}
from "../utils/updateTodayHistory";

export default function Habits() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");

    return saved
      ? JSON.parse(saved)
      : [
          {
            name: "Java Practice",
            completed: true,
          },
          {
            name: "Drink Water",
            completed: true,
          },
          {
            name: "Exercise",
            completed: false,
          },
          {
            name: "Meditation",
            completed: true,
          },
        ];
  });

  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (!newHabit.trim()) return;

    setHabits([
      ...habits,
      {
        name: newHabit,
        completed: false,
      },
    ]);

    setNewHabit("");
    updateTodayHistory();
    markTodayActive();
  };

  const deleteHabit = (index) => {
    const updated = habits.filter((_, i) => i !== index);

    setHabits(updated);
    updateTodayHistory();
  };

  const toggleHabit = (index) => {
    const updated = [...habits];

    updated[index].completed = !updated[index].completed;

    setHabits(updated);
    updateTodayHistory();
    markTodayActive();
  };

  return (
    <div className="page">
      <h1>✅ Habits</h1>

      <div className="glass-card">
        <input
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add habit..."
          className="habit-input"
        />

        <button className="add-btn" onClick={addHabit}>
          Add Habit
        </button>
      </div>

      {habits.map((habit, index) => (
        <div
          key={index}
          className="glass-card"
          style={{
            marginTop: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(index)}
              />

              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                {habit.name}
              </span>
            </div>

            <button className="delete-btn" onClick={() => deleteHabit(index)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
