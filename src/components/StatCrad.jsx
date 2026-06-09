export default function StatCard({ icon, value, label }) {
  const score =
    label === "Daily Score" ? Number(String(value).replace("%", "")) : null;

  return (
    <div className="stat-card">
      <div
        style={{
          fontSize: "28px",
          marginBottom: "10px",
        }}
      >
        {icon}
      </div>

      <h2
        style={{
          margin: "0",
        }}
      >
        {value}
      </h2>

      <p
        style={{
          color: "#666",
          marginTop: "8px",
        }}
      >
        {label}
      </p>

      {label === "Daily Score" && (
        <div
          style={{
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {score >= 90 && "🏆 Outstanding"}
          {score >= 80 && score < 90 && "🔥 Excellent"}
          {score >= 70 && score < 80 && "💪 Great"}
          {score >= 50 && score < 70 && "👍 Good"}
          {score < 50 && "⚡ Keep Going"}
        </div>
      )}
    </div>
  );
}
