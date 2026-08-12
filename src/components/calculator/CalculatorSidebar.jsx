import "./CalculatorSidebar.css";
import { NavLink } from "react-router-dom";

const calculators = [
  {
    name: "SIP Calculator",
    icon: "📈",
    path: "/investments/sip",
  },
  {
    name: "Lumpsum Calculator",
    icon: "💰",
    path: "/investments/lumpsum",
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
    name: "CAGR Calculator",
    icon: "📊",
    path: "/investments/cagr",
  },
];

function CalculatorSidebar() {
  return (
    <aside className="calculator-sidebar">

      <h2>Investment Calculators</h2>

      {calculators.map((calculator) => (
        <NavLink
          key={calculator.path}
          to={calculator.path}
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <span>{calculator.icon}</span>

          <span>{calculator.name}</span>
        </NavLink>
      ))}

    </aside>
  );
}

export default CalculatorSidebar;