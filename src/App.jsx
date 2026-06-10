import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Journal from "./pages/Journal";
import Goals from "./pages/Goals";
import Analytics from "./pages/Analytics";
import BottomNav from "./components/BottomNav";
import { useEffect } from "react";
import { resetHabitsIfNewDay } from "./utils/dailyReset";
import CalendarHistory from "./pages/CalenderHistory";

function App() {
  useEffect(() => {
    resetHabitsIfNewDay();
  }, []);
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/history" element={<CalendarHistory />} />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
