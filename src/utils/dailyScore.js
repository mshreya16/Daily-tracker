export function calculateDailyScore() {

  const habits =
    JSON.parse(
      localStorage.getItem("habits")
    ) || [];

  const water =
    Number(
      localStorage.getItem("water")
    ) || 0;

  const mood =
    localStorage.getItem("mood")
    || "😊";

  const habitScore =
    habits.length
      ? (
          habits.filter(
            h => h.completed
          ).length /
          habits.length
        ) * 100
      : 0;

  const waterScore =
    (water / 8) * 100;

  const moodMap = {
    "😊":100,
    "😐":70,
    "😔":40,
    "😡":20,
  };

  const moodScore =
    moodMap[mood];

  return Math.round(
    habitScore * 0.6 +
    waterScore * 0.2 +
    moodScore * 0.2
  );
}