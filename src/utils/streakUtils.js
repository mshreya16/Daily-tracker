function getActivityDates() {

  const dates =
    JSON.parse(
      localStorage.getItem(
        "activityDates"
      )
    ) || [];

  return dates.sort();

}

export function getCurrentStreak() {

  const dates =
    getActivityDates();

  if (
    dates.length === 0
  ) {
    return 0;
  }

  let streak = 0;

  const today =
    new Date();

  for (
    let i = 0;
    i < 365;
    i++
  ) {

    const checkDate =
      new Date();

    checkDate.setDate(
      today.getDate() - i
    );

    const formatted =
      checkDate
        .toISOString()
        .split("T")[0];

    if (
      dates.includes(
        formatted
      )
    ) {

      streak++;

    } else {

      break;

    }

  }

  return streak;

}

export function getBestStreak() {

  const dates =
    getActivityDates();

  if (
    dates.length === 0
  ) {
    return 0;
  }

  let best = 0;
  let current = 1;

  for (
    let i = 1;
    i < dates.length;
    i++
  ) {

    const prev =
      new Date(
        dates[i - 1]
      );

    const curr =
      new Date(
        dates[i]
      );

    const diff =
      (
        curr - prev
      ) /
      (
        1000 *
        60 *
        60 *
        24
      );

    if (
      diff === 1
    ) {

      current++;

    } else {

      best =
        Math.max(
          best,
          current
        );

      current = 1;

    }

  }

  return Math.max(
    best,
    current
  );

}