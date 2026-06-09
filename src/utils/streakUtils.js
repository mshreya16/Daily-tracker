export function getCurrentStreak() {

  const entries =
    JSON.parse(
      localStorage.getItem(
        "journalHistory"
      )
    ) || [];

  if (entries.length === 0)
    return 0;

  const uniqueDates =
    [...new Set(
      entries.map(
        entry => entry.date
      )
    )];

  return uniqueDates.length;
}
export function getBestStreak(
  currentStreak
) {

  const best =
    Number(
      localStorage.getItem(
        "bestStreak"
      )
    ) || 0;

  if (
    currentStreak > best
  ) {

    localStorage.setItem(
      "bestStreak",
      currentStreak
    );

    return currentStreak;
  }

  return best;
}