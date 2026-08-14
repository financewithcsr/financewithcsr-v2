import { useNavigate } from "react-router-dom";
import "./CalculatorSection.css";

function CalculatorSection() {
  const navigate = useNavigate();

  const calculators = [
    {
      icon: "📈",
      title: "SIP Calculator",
      description: "Estimate your SIP investment growth and future value.",
      path: "/investments/sip",
    },
    {
      icon: "🏦",
      title: "FD Calculator",
      description: "Calculate Fixed Deposit maturity and interest earned.",
      path: "/investments/fd",
    },
    {
      icon: "💰",
      title: "RD Calculator",
      description: "Calculate your monthly RD investment and maturity amount.",
      path: "/investments/rd",
    },
    {
      icon: "🛡️",
      title: "PPF Calculator",
      description: "Estimate PPF investment growth and maturity value.",
      path: "/investments/ppf",
    },
    {
      icon: "📊",
      title: "Lumpsum Calculator",
      description: "Estimate returns on your one-time investment.",
      path: "/investments/lumpsum",
    },
    {
      icon: "📈",
      title: "CAGR Calculator",
      description: "Calculate the annual growth rate of your investment.",
      path: "/investments/cagr",
    },
    {
      icon: "🏠",
      title: "Home Loan Calculator",
      description: "Calculate your home loan EMI and total interest.",
      path: "/loans/home-loan",
    },
    {
      icon: "🚗",
      title: "Car Loan Calculator",
      description: "Estimate your car loan EMI and repayment amount.",
      path: "/loans/car-loan",
    },
    {
      icon: "💳",
      title: "Personal Loan Calculator",
      description: "Calculate your personal loan EMI and interest cost.",
      path: "/loans/personal-loan",
    },
    {
      icon: "🧮",
      title: "EMI Calculator",
      description: "Calculate EMI for different types of loans.",
      path: "/loans/emi",
    },
  ];

  return (
    <section className="calculator-section">
      <div className="calculator-container">

        <div className="calculator-heading">

          <span className="section-tag">
            Financial Tools
          </span>

          <h2>
            Popular Calculators
          </h2>

          <p>
            Start with the calculators used by thousands of users
            to plan their finances.
          </p>

        </div>

        <div className="calculator-grid">

          {calculators.map((calculator) => (

            <button
              key={calculator.title}
              type="button"
              className="calculator-card"
              onClick={() => navigate(calculator.path)}
            >

              <div className="calculator-icon">
                {calculator.icon}
              </div>

              <div className="calculator-content">

                <h3>
                  {calculator.title}
                </h3>

                <p>
                  {calculator.description}
                </p>

              </div>

              <span className="calculator-arrow">
                →
              </span>

            </button>

          ))}

        </div>

        <div className="calculator-view-all">

          <button
            type="button"
            onClick={() => navigate("/investments")}
          >
            View All Calculators →
          </button>

        </div>

      </div>
    </section>
  );
}

export default CalculatorSection;