export default function Journal() {
  const entries = JSON.parse(localStorage.getItem("journalHistory")) || [];

  return (
    <div className="page">
      <h1>📔 Journal History</h1>

      {entries.length === 0 ? (
        <div className="glass-card">No journal entries yet.</div>
      ) : (
        entries.map((entry, index) => (
          <div
            key={index}
            className="glass-card"
            style={{
              marginBottom: "15px",
            }}
          >
            <h3>{entry.date}</h3>

            <p>{entry.text}</p>
          </div>
        ))
      )}
    </div>
  );
}
