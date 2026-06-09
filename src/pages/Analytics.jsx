import GoalChart from "../components/GoalChart";
import MoodChart from "../components/MoodChart";
import { calculateDailyScore } from "../utils/dailyScore";

export default function Analytics() {
  const habits = JSON.parse(localStorage.getItem("habits")) || [];

  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  const mood = localStorage.getItem("mood") || "😊";

  const score = calculateDailyScore();

  return (
    <div className="page">
      <h1>📊 Analytics</h1>

      <div className="glass-card">
        <h2>🎯 Daily Score</h2>
        <h1>{score}%</h1>
      </div>

      <div className="glass-card">
        <h2>😊 Current Mood</h2>
        <h1>{mood}</h1>
      </div>

      <div className="glass-card">
        <h2>✅ Habit Summary</h2>

        {habits.map((habit, index) => (
          <p key={index}>
            {habit.completed ? "✅" : "⬜"} {habit.name}
          </p>
        ))}
      </div>

      <div className="glass-card">
        <h2>🎯 Goals Progress</h2>

        {goals.map((goal, index) => (
          <div key={index}>
            <p>{goal.title}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${goal.progress}%`,
                }}
              />
            </div>
          </div>
        ))}
        <GoalChart />
        <MoodChart />
      </div>
    </div>
  );
}
