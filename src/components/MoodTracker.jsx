export default function MoodTracker({ mood, setMood }) {
  return (
    <div className="stat-card">
      <h3>Today's Mood</h3>

      <h2>{mood}</h2>

      <div className="mood-picker">
        <button onClick={() => setMood("😊")}>😊</button>

        <button onClick={() => setMood("😐")}>😐</button>

        <button onClick={() => setMood("😔")}>😔</button>

        <button onClick={() => setMood("😡")}>😡</button>
      </div>
    </div>
  );
}
