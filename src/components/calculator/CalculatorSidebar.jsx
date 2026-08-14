import "./CalculatorSidebar.css";
import { NavLink } from "react-router-dom";

const investmentCalculators = [
  {
    name: "SIP Calculator",
    icon: "📈",
    path: "/investments/sip",
  },
  {
    name: "FD Calculator",
    icon: "🏦",
    path: "/investments/fd",
  },
  {
    name: "RD Calculator",
    icon: "💳",
    path: "/investments/rd",
  },
  {
    name: "PPF Calculator",
    icon: "🛡️",
    path: "/investments/ppf",
  },
  {
    name: "Lumpsum Calculator",
    icon: "💰",
    path: "/investments/lumpsum",
  },
  {
    name: "CAGR Calculator",
    icon: "📊",
    path: "/investments/cagr",
  },
];

const loanCalculators = [
  {
    name: "EMI Calculator",
    icon: "🧮",
    path: "/loans/emi",
  },
  {
    name: "Home Loan",
    icon: "🏠",
    path: "/loans/home-loan",
  },
  {
    name: "Car Loan",
    icon: "🚗",
    path: "/loans/car-loan",
  },
  {
    name: "Personal Loan",
    icon: "💼",
    path: "/loans/personal-loan",
  },
];

function CalculatorSidebar() {
  return (
    <aside className="calculator-sidebar">

      <div className="sidebar-section">

        <h2>Investment Calculators</h2>

        {investmentCalculators.map((calculator) => (
          <NavLink
            key={calculator.path}
            to={calculator.path}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            <span className="sidebar-icon">
              {calculator.icon}
            </span>

            <span>{calculator.name}</span>
          </NavLink>
        ))}

      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">

        <h2>Loan Calculators</h2>

        {loanCalculators.map((calculator) => (
          <NavLink
            key={calculator.path}
            to={calculator.path}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            <span className="sidebar-icon">
              {calculator.icon}
            </span>

            <span>{calculator.name}</span>
          </NavLink>
        ))}

      </div>

    </aside>
  );
}

export default CalculatorSidebar;