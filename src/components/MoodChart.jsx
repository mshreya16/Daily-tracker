import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function MoodChart() {
  const mood = localStorage.getItem("mood") || "😊";

  const data = [
    {
      name: mood,
      value: 100,
    },
  ];

  return (
    <div className="glass-card">
      <h2>😊 Mood Analysis</h2>

      <div style={{ height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={80}>
              <Cell />
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
