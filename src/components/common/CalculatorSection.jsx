import "./CalculatorSection.css";
import { useNavigate } from "react-router-dom";

function CalculatorSection() {
  const navigate = useNavigate();

  const investments = [
    {
      title: "SIP Calculator",
      icon: "📈",
      path: "/investments/sip",
    },
    {
      title: "FD Calculator",
      icon: "🏦",
      path: "/investments/fd",
    },
    {
      title: "RD Calculator",
      icon: "💳",
      path: "/investments/rd",
    },
    {
      title: "Lumpsum Calculator",
      icon: "💰",
      path: "/investments/lumpsum",
    },
    {
      title: "PPF Calculator",
      icon: "🛡️",
      path: "/investments/ppf",
    },
    {
      title: "CAGR Calculator",
      icon: "📊",
      path: "/investments/cagr",
    },
  ];

  const loans = [
    {
      title: "EMI Calculator",
      icon: "💸",
      path: "/loans/emi",
    },
    {
      title: "Home Loan",
      icon: "🏠",
      path: "/loans/home-loan",
    },
    {
      title: "Car Loan",
      icon: "🚗",
      path: "/loans/car-loan",
    },
    {
      title: "Personal Loan",
      icon: "👤",
      path: "/loans/personal-loan",
    },
  ];

  return (
    <section className="calculator-section">

      <div className="calculator-container">

        <h2>Financial Calculators</h2>

        <p>
          Smart calculators to help you plan investments,
          loans and your financial future.
        </p>

        <h3 className="section-title">
          Investment Calculators
        </h3>

        <div className="calculator-grid">

          {investments.map((item) => (
            <div
              className="calculator-card"
              key={item.title}
              onClick={() => navigate(item.path)}
            >
              <div className="calculator-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <button>
                Open Calculator →
              </button>
            </div>
          ))}

        </div>

        <h3 className="section-title">
          Loan Calculators
        </h3>

        <div className="calculator-grid">

          {loans.map((item) => (
            <div
              className="calculator-card"
              key={item.title}
              onClick={() => navigate(item.path)}
            >
              <div className="calculator-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <button>
                Open Calculator →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CalculatorSection;