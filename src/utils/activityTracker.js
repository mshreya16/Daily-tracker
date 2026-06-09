export function markTodayActive() {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const activityDates =
    JSON.parse(
      localStorage.getItem(
        "activityDates"
      )
    ) || [];

  if (
    !activityDates.includes(
      today
    )
  ) {

    activityDates.push(today);

    localStorage.setItem(
      "activityDates",
      JSON.stringify(
        activityDates
      )
    );

  }

}

export function getActivityDates() {

  return (
    JSON.parse(
      localStorage.getItem(
        "activityDates"
      )
    ) || []
  );

}

export function isDayActive(date) {

  const activityDates =
    getActivityDates();

  return activityDates.includes(
    date
  );

}

export function getCurrentMonthActivityCount() {

  const activityDates =
    getActivityDates();

  const today =
    new Date();

  const currentYear =
    today.getFullYear();

  const currentMonth =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  return activityDates.filter(
    (date) =>
      date.startsWith(
        `${currentYear}-${currentMonth}`
      )
  ).length;

}