import "./Stats.css";
import { useNavigate } from "react-router-dom";

function Stats() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "SIP Calculator",
      value: "Most Popular",
      icon: "📈",
      color: "#DBEAFE",
      path: "/investments/sip",
    },
    {
      title: "FD Calculator",
      value: "Safe Investment",
      icon: "🏦",
      color: "#DCFCE7",
      path: "/investments/fd",
    },
    {
      title: "EMI Calculator",
      value: "Loan Planning",
      icon: "💸",
      color: "#FEF3C7",
      path: "/loans/emi",
    },
    {
      title: "PPF Calculator",
      value: "Tax Saving",
      icon: "🛡️",
      color: "#F3E8FF",
      path: "/investments/ppf",
    },
  ];

  return (
    <section className="stats">

      <div className="stats-container">

        <h2>Popular Calculators</h2>

        <p>
          Start with the calculators used by thousands of users to plan their finances.
        </p>

        <div className="stats-grid">

          {cards.map((card) => (
            <div
              key={card.title}
              className="stat-card"
              onClick={() => navigate(card.path)}
            >
              <div
                className="stat-icon"
                style={{ background: card.color }}
              >
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <span>{card.value}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;