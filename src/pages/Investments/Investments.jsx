import "./Investments.css";
import { useNavigate } from "react-router-dom";

const calculators = [
  {
    title: "SIP Calculator",
    description:
      "Calculate the future value of your monthly SIP investments.",
    icon: "📈",
    path: "/investments/sip",
    available: true,
  },
  {
    title: "FD Calculator",
    description:
      "Calculate fixed deposit maturity amount.",
    icon: "🏦",
    path: "/investments/fd",
    available: true,
  },
  {
    title: "Lumpsum Calculator",
    description:
      "Estimate returns on one-time investments.",
    icon: "💰",
    available: false,
  },
  {
    title: "RD Calculator",
    description:
      "Estimate recurring deposit maturity value.",
    icon: "💳",
    available: false,
  },
  {
    title: "PPF Calculator",
    description:
      "Plan your long-term savings with PPF.",
    icon: "🛡️",
    available: false,
  },
  {
    title: "CAGR Calculator",
    description:
      "Calculate annualized investment growth.",
    icon: "📊",
    available: false,
  },
];

function Investments() {
  const navigate = useNavigate();

  return (
    <section className="investments-page">

      <div className="investments-header">

        <h1>Investment Calculators</h1>

        <p>
          Choose a calculator below and start planning your financial future with confidence.
        </p>

      </div>

      <div className="calculator-grid">

        {calculators.map((item, index) => (

          <div className="calculator-card" key={index}>

            <div className="calculator-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            {item.available ? (
              <button
                onClick={() => navigate(item.path)}
              >
                Open Calculator →
              </button>
            ) : (
              <button
                className="coming-soon-btn"
                disabled
              >
                Coming Soon
              </button>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Investments;