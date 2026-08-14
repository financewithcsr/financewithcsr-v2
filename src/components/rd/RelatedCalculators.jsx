import { useNavigate } from "react-router-dom";
import "../ppf/RelatedCalculators.css";

function RelatedCalculators() {
  const navigate = useNavigate();

  const calculators = [
    {
      title: "SIP Calculator",
      description: "Calculate your SIP investment and expected returns.",
      path: "/calculators/sip",
      icon: "📈",
    },
    {
      title: "Lumpsum Calculator",
      description: "Calculate returns on a one-time investment.",
      path: "/calculators/lumpsum",
      icon: "💰",
    },
    {
      title: "FD Calculator",
      description: "Calculate your Fixed Deposit maturity amount.",
      path: "/calculators/fd",
      icon: "🏦",
    },
    {
      title: "Personal Loan Calculator",
      description:
        "Calculate EMI and total interest on your personal loan.",
      path: "/calculators/personal-loan",
      icon: "💳",
    },
    {
      title: "PPF Calculator",
      description:
        "Estimate your PPF maturity amount and interest.",
      path: "/calculators/ppf",
      icon: "🪙",
    },
    {
      title: "RD Calculator",
      description:
        "Calculate your Recurring Deposit maturity amount.",
      path: "/calculators/rd",
      icon: "💵",
    },
  ];

  return (
    <section className="related-calculators">
      <h2>Related Calculators</h2>

      <p className="related-description">
        Explore our other financial calculators to plan your money better.
      </p>

      <div className="related-grid">
        {calculators.map((calculator) => (
          <button
            key={calculator.path}
            className="related-card"
            onClick={() => navigate(calculator.path)}
          >
            <div className="related-icon">
              {calculator.icon}
            </div>

            <div className="related-content">
              <h3>{calculator.title}</h3>

              <p>{calculator.description}</p>
            </div>

            <div className="related-arrow">
              →
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default RelatedCalculators;