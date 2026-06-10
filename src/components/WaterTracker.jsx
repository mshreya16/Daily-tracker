import { markTodayActive } from "../utils/activityTracker";
import { updateTodayHistory } from "../utils/updateTodayHistory";
export default function WaterTracker({ water, setWater }) {
  return (
    <div className="stat-card">
      <h3>💧 Water</h3>

      <h2>{water}/8</h2>

      <div className="counter-buttons">
        <button onClick={() => setWater(Math.max(0, water - 1))}>-</button>

        <button
          onClick={() => {
            setWater(water + 1);
            updateTodayHistory();

            markTodayActive();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
