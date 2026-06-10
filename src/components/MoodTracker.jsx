import { updateTodayHistory } from "../utils/updateTodayHistory";
import { markTodayActive } from "../utils/activityTracker";

export default function MoodTracker({ mood, setMood }) {
  const handleMoodChange = (selectedMood) => {
    console.log("Mood clicked");
    setMood(selectedMood);

    localStorage.setItem("mood", selectedMood);

    updateTodayHistory();

    markTodayActive();
  };

  return (
    <div className="stat-card">
      <h3>Today's Mood</h3>

      <h2>{mood}</h2>

      <div className="mood-picker">
        <button onClick={() => handleMoodChange("😊")}>😊</button>

        <button onClick={() => handleMoodChange("😐")}>😐</button>

        <button onClick={() => handleMoodChange("😔")}>😔</button>

        <button onClick={() => handleMoodChange("😡")}>😡</button>
      </div>
    </div>
  );
}
