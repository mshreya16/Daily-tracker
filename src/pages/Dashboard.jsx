import { useState, useEffect } from "react";

import HeroCard from "../components/HeroCard";
import WaterTracker from "../components/WaterTracker";
import MoodTracker from "../components/MoodTracker";
import HabitList from "../components/HabitList";
import WeeklyChart from "../components/WeeklyChart";
import ReflectionCard from "../components/ReflectionCard";
import StatCard from "../components/StatCrad";
import Achievements from "../components/Achievements";
import StreakCard from "../components/StreakCard";
import Heatmap from "../components/HeatMap";
import { getHabitProgress } from "../utils/habitUtils";
import { getCurrentStreak, getBestStreak } from "../utils/streakUtils";

import { calculateDailyScore } from "../utils/dailyScore";
import SummaryCard from "../components/SummaryCard";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";

export default function Dashboard() {
  const [water, setWater] = useState(() => {
    return Number(localStorage.getItem("water")) || 0;
  });

  const [mood, setMood] = useState(localStorage.getItem("mood") || "😊");

  const [journal, setJournal] = useState("");

  useEffect(() => {
    localStorage.setItem("water", water);
  }, [water]);

  useEffect(() => {
    localStorage.setItem("mood", mood);
  }, [mood]);

  const progress = getHabitProgress();

  const dailyScore = calculateDailyScore();

  const currentStreak = getCurrentStreak();

  const bestStreak = getBestStreak(currentStreak);

  const saveJournal = () => {
    if (!journal.trim()) return;

    const entries = JSON.parse(localStorage.getItem("journalHistory")) || [];

    entries.unshift({
      date: new Date().toLocaleDateString(),
      text: journal,
    });

    localStorage.setItem("journalHistory", JSON.stringify(entries));

    setJournal("");

    alert("Journal saved!");
  };

  return (
    <div className="page">
      <HeroCard progress={progress} />
      <Login />
      <UserProfile />

      <div className="stats-grid">
        <StatCard icon="🔥" value={currentStreak} label="Day Streak" />

        <WaterTracker water={water} setWater={setWater} />

        <MoodTracker mood={mood} setMood={setMood} />

        <StatCard icon="🎯" value={`${dailyScore}%`} label="Daily Score" />
        <HabitList />

        <WeeklyChart />

        <ReflectionCard
          journal={journal}
          setJournal={setJournal}
          saveJournal={saveJournal}
        />
        <Heatmap />
        <Achievements />
        <SummaryCard />

        <StreakCard current={currentStreak} best={bestStreak} />
      </div>
    </div>
  );
}
