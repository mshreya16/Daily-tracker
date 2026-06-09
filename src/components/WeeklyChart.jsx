import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function WeeklyChart() {
  const activityDates = JSON.parse(localStorage.getItem("activityDates")) || [];

  const days = [];

  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date();

    date.setDate(today.getDate() - i);

    const formatted = date.toISOString().split("T")[0];

    const dayName = date.toLocaleDateString("en-US", {
      weekday: "short",
    });

    days.push({
      day: dayName,
      score: activityDates.includes(formatted) ? 100 : 0,
    });
  }

  return (
    <div className="glass-card">
      <h2>Weekly Activity</h2>

      <div
        style={{
          height: 250,
        }}
      >
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={days}>
            <XAxis dataKey="day" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#0071e3"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
