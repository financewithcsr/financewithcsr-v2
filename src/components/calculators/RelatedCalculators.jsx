import "./RelatedCalculators.css";
import { useNavigate } from "react-router-dom";

const calculators = [
  {
    icon: "🏦",
    title: "FD Calculator",
    description: "Calculate your Fixed Deposit maturity amount.",
    path: "/investments/fd",
  },
  {
    icon: "💰",
    title: "Lumpsum Calculator",
    description: "Estimate returns on one-time investments.",
    path: "/investments/lumpsum",
  },
  {
    icon: "📊",
    title: "CAGR Calculator",
    description: "Calculate annualized investment growth.",
    path: "/investments/cagr",
  },
  {
    icon: "🛡️",
    title: "PPF Calculator",
    description: "Plan your long-term savings with PPF.",
    path: "/investments/ppf",
  },
];

function RelatedCalculators() {
  const navigate = useNavigate();

  return (
    <section className="related-section">
      <h2>Related Calculators</h2>

      <div className="related-grid">
        {calculators.map((item, index) => (
          <div className="related-card" key={index}>
            <div className="related-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button onClick={() => navigate(item.path)}>
              Open Calculator →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedCalculators;