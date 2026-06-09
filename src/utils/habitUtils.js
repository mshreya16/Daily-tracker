export function getHabitProgress() {

  const saved =
    localStorage.getItem("habits");

  if (!saved) return 0;

  const habits =
    JSON.parse(saved);

  if (habits.length === 0)
    return 0;

  const completed =
    habits.filter(
      (h) => h.completed
    ).length;

  return Math.round(
    (completed / habits.length) * 100
  );
}