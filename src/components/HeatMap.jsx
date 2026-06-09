export default function Heatmap() {
  const journalEntries =
    JSON.parse(localStorage.getItem("journalHistory")) || [];

  const entryDates = journalEntries.map((entry) => entry.date);

  const days = [];

  for (let i = 1; i <= 30; i++) {
    const date = new Date();

    date.setDate(i);

    const formattedDate = date.toLocaleDateString();

    const active = entryDates.includes(formattedDate);

    days.push(
      <div
        key={i}
        className={active ? "heatmap-cell active" : "heatmap-cell"}
      />,
    );
  }

  return (
    <div className="glass-card">
      <h2>📅 Monthly Activity</h2>

      <div className="heatmap-grid">{days}</div>

      <p
        style={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#666",
        }}
      >
        Green squares indicate days with journal activity.
      </p>
    </div>
  );
}
