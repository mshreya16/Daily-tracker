import { Home, CheckSquare, BookOpen, Target, BarChart3 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">
        <Home size={20} />
      </Link>
      <Link to="/habits">
        <CheckSquare size={20} />
      </Link>
      <Link to="/journal">
        <BookOpen size={20} />
      </Link>
      <Link to="/goals">
        <Target size={20} />
      </Link>
      <Link to="/analytics">
        <BarChart3 size={20} />
      </Link>
      <NavLink to="/history">📅 History</NavLink>
    </nav>
  );
}
