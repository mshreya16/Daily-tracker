import { useState, useEffect } from "react";
import { markTodayActive } from "../utils/activityTracker";

export default function Goals() {
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");

    return savedGoals
      ? JSON.parse(savedGoals)
      : [
          {
            title: "Java Learning",
            progress: 65,
          },
          {
            title: "Fitness",
            progress: 40,
          },
          {
            title: "Savings",
            progress: 55,
          },
        ];
  });

  const [goalName, setGoalName] = useState("");

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (!goalName.trim()) return;

    setGoals([
      ...goals,
      {
        title: goalName,
        progress: 0,
      },
    ]);
    markTodayActive();
    setGoalName("");
  };

  const deleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);

    setGoals(updatedGoals);
  };

  const increaseProgress = (index) => {
    const updatedGoals = [...goals];

    updatedGoals[index].progress = Math.min(
      100,
      updatedGoals[index].progress + 10,
    );

    setGoals(updatedGoals);
    markTodayActive();
  };

  const decreaseProgress = (index) => {
    const updatedGoals = [...goals];

    updatedGoals[index].progress = Math.max(
      0,
      updatedGoals[index].progress - 10,
    );

    setGoals(updatedGoals);
    markTodayActive();
  };

  return (
    <div className="page">
      <h1>🎯 Goals</h1>

      <div className="glass-card">
        <input
          type="text"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          placeholder="Add Goal..."
          className="habit-input"
        />

        <button className="add-btn" onClick={addGoal}>
          Add Goal
        </button>
      </div>

      {goals.map((goal, index) => (
        <div
          key={index}
          className="glass-card"
          style={{
            marginTop: "20px",
          }}
        >
          <h3>
            {goal.title}

            {goal.progress === 100 && " 🎉"}
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <button className="add-btn" onClick={() => decreaseProgress(index)}>
              -
            </button>

            <strong>{goal.progress}%</strong>

            <button className="add-btn" onClick={() => increaseProgress(index)}>
              +
            </button>
          </div>

          <div className="progress-bar">
            {goal.progress === 100 && (
              <p
                style={{
                  color: "#34c759",
                  fontWeight: "bold",
                }}
              >
                Goal Completed! 🎉
              </p>
            )}
            <div
              className="progress-fill"
              style={{
                width: `${goal.progress}%`,
              }}
            />
          </div>

          <button
            className="delete-btn"
            style={{
              marginTop: "15px",
            }}
            onClick={() => deleteGoal(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
