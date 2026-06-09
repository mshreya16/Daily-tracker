import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", score: 65 },
  { day: "Tue", score: 80 },
  { day: "Wed", score: 72 },
  { day: "Thu", score: 90 },
  { day: "Fri", score: 78 },
  { day: "Sat", score: 95 },
  { day: "Sun", score: 88 },
];

export default function WeeklyChart() {
  return (
    <div className="glass-card">
      <h2>Weekly Progress</h2>

      <div style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
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
