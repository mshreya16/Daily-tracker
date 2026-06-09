import { getActivityDates } from "../utils/activityTracker";

export default function Heatmap() {
  const activityDates = getActivityDates();

  const today = new Date();

  const year = today.getFullYear();

  const month = today.getMonth();

  const monthName = today.toLocaleString("default", { month: "long" });

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();

  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push(<div key={`empty-${i}`} className="calendar-empty" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day,
    ).padStart(2, "0")}`;

    const active = activityDates.includes(date);

    cells.push(
      <div
        key={day}
        className={active ? "calendar-day active" : "calendar-day"}
      >
        {day}
      </div>,
    );
  }

  return (
    <div className="glass-card">
      <h2>
        📅 {monthName} {year}
      </h2>

      <div className="calendar-weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      <div className="calendar-grid">{cells}</div>

      <p
        style={{
          marginTop: 15,
        }}
      >
        🟩 Active Day &nbsp;&nbsp; ⬜ No Activity
      </p>
    </div>
  );
}
