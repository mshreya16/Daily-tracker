export default function ReflectionCard({ journal, setJournal, saveJournal }) {
  return (
    <div className="glass-card">
      <h2>Today's Reflection</h2>

      <textarea
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
        rows="5"
        className="journal-input"
        placeholder="What went well today?"
      />

      <button
        className="add-btn"
        onClick={saveJournal}
        style={{
          marginTop: "10px",
        }}
      >
        Save Entry
      </button>
    </div>
  );
}
