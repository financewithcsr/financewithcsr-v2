import "./Investments.css";
import { useNavigate } from "react-router-dom";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Calculate the future value of your monthly SIP investments.",
    icon: "📈",
    path: "/investments/sip",
  },
  {
    title: "FD Calculator",
    description: "Calculate fixed deposit maturity amount.",
    icon: "🏦",
    path: "/investments/fd",
  },
  {
    title: "Lumpsum Calculator",
    description: "Estimate returns on one-time investments.",
    icon: "💰",
    path: "/investments/lumpsum",
  },
  {
    title: "RD Calculator",
    description: "Estimate recurring deposit maturity value.",
    icon: "💳",
    path: "/investments/rd",
  },
  {
    title: "PPF Calculator",
    description: "Plan your long-term savings with PPF.",
    icon: "🛡️",
    path: "/investments/ppf",
  },
  {
    title: "CAGR Calculator",
    description: "Calculate annualized investment growth.",
    icon: "📊",
    path: "/investments/cagr",
  },
];

function Investments() {
  const navigate = useNavigate();

  const openCalculator = (path) => {
    console.log("Navigating to:", path);

    navigate(path);
  };

  return (
    <section className="investments-page">

      <div className="investments-header">

        <h1>Investment Calculators</h1>

        <p>
          Choose a calculator below and start planning your financial future
          with confidence.
        </p>

      </div>

      <div className="calculator-grid">

        {calculators.map((item) => (

          <div
            className="calculator-card"
            key={item.title}
          >

            <div className="calculator-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button
              type="button"
              onClick={() => openCalculator(item.path)}
            >
              Open Calculator →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Investments;