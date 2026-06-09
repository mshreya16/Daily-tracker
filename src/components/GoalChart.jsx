import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GoalChart() {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];

  const data = goals.map((goal) => ({
    name: goal.title,
    progress: goal.progress,
  }));

  return (
    <div className="glass-card">
      <h2>🎯 Goal Progress</h2>

      <div style={{ height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="progress" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
