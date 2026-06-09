import ProgressRing from "./ProgressRing";
import ThemeToggle from "./ThemeToggle";
import { quotes } from "../utils/quotes";

export default function HeroCard({ progress }) {
  const hour = new Date().getHours();
  const quote = quotes[new Date().getDate() % quotes.length];

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  return (
    <div className="hero-card">
      <div className="hero-top">
        <div>
          <p className="subtitle">{new Date().toDateString()}</p>

          <h1>{greeting} 👋</h1>

          <p className="quote">{quote}</p>
        </div>

        <ThemeToggle />
      </div>

      <ProgressRing progress={progress} />
    </div>
  );
}
