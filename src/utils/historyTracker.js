export function saveDailyHistory({
  mood,
  water,
  habits,
  journal
}) {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const history =
    JSON.parse(
      localStorage.getItem(
        "dailyHistory"
      )
    ) || {};

  history[today] = {
    mood,
    water,
    habits,
    journal,
    timestamp:
      new Date()
        .toLocaleString()
  };

  localStorage.setItem(
    "dailyHistory",
    JSON.stringify(history)
  );

}