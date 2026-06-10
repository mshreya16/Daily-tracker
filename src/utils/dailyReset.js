export function resetHabitsIfNewDay() {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const lastReset =
    localStorage.getItem(
      "lastResetDate"
    );

  if (lastReset === today) {
    return;
  }

  const habits =
    JSON.parse(
      localStorage.getItem(
        "habits"
      )
    ) || [];

  const resetHabits =
    habits.map(
      (habit) => ({
        ...habit,
        completed: false
      })
    );

  localStorage.setItem(
    "habits",
    JSON.stringify(
      resetHabits
    )
  );

  localStorage.setItem(
    "lastResetDate",
    today
  );

}