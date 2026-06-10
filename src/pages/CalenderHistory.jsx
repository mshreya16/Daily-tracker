import { useState } from "react";

export default function CalendarHistory() {

  const dailyHistory =
    JSON.parse(
      localStorage.getItem("dailyHistory")
    ) || {};

  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth();

  const monthName =
    today.toLocaleString("default", {
      month: "long",
    });

  const daysInMonth =
    new Date(
      year,
      month + 1,
      0
    ).getDate();

  const firstDay =
    new Date(
      year,
      month,
      1
    ).getDay();

  const [selectedDate,
    setSelectedDate] =
      useState(null);

  const cells = [];

  for (
    let i = 0;
    i < firstDay;
    i++
  ) {
    cells.push(
      <div
        key={`empty-${i}`}
        className="calendar-empty"
      />
    );
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {

    const date =
      `${year}-${String(
        month + 1
      ).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;

    const hasData =
      !!dailyHistory[date];

    cells.push(
      <div
        key={date}
        className={
          hasData
            ? "calendar-day active"
            : "calendar-day"
        }
        onClick={() =>
          setSelectedDate(date)
        }
      >
        {day}
      </div>
    );
  }

  const dayData =
    selectedDate
      ? dailyHistory[selectedDate]
      : null;

  return (

    <div className="page">

      <h1>
        📅 Calendar History
      </h1>

      <div className="glass-card">

        <h2>
          {monthName} {year}
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

        <div className="calendar-grid">
          {cells}
        </div>

      </div>

      {dayData && (

        <div
          className="glass-card"
          style={{
            marginTop: "20px"
          }}
        >

          <h2>
            {selectedDate}
          </h2>

          <p>
            😊 Mood: {dayData.mood}
          </p>

          <p>
            💧 Water: {dayData.water}
          </p>

          <p>
            📔 Journal:
          </p>

          <p>
            {dayData.journal || "No journal entry"}
          </p>

          <h3>
            ✅ Habits
          </h3>

          {dayData.habits.map(
            (habit, index) => (

              <div key={index}>

                {habit.completed
                  ? "✅"
                  : "⬜"}

                {" "}

                {habit.name}

              </div>

            )
          )}

        </div>

      )}

    </div>

  );

}