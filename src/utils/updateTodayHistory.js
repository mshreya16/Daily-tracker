export function updateTodayHistory() {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const dailyHistory =
  JSON.parse(
    localStorage.getItem(
      "dailyHistory"
    )
  ) || {};

  dailyHistory[today] = {

    mood:
      localStorage.getItem(
        "mood"
      ) || "😊",

    water:
      Number(
        localStorage.getItem(
          "water"
        )
      ) || 0,

    habits:
      JSON.parse(
        localStorage.getItem(
          "habits"
        )
      ) || [],

    journal:
      dailyHistory[today]?.journal || "",

    timestamp:
      new Date()
        .toLocaleString()

  };

  localStorage.setItem(
    "dailyHistory",
    JSON.stringify(dailyHistory)
  );

}