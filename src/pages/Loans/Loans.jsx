import "./Loans.css";
import { useNavigate } from "react-router-dom";

const calculators = [
  {
    title: "EMI Calculator",
    description:
      "Calculate your monthly EMI, total interest and total repayment.",
    icon: "🧮",
    path: "/loans/emi",
  },
  {
    title: "Home Loan Calculator",
    description:
      "Calculate your home loan EMI, interest and total repayment.",
    icon: "🏠",
    path: "/loans/home-loan",
  },
  {
    title: "Car Loan Calculator",
    description:
      "Calculate your car loan EMI, interest and total repayment.",
    icon: "🚗",
    path: "/loans/car-loan",
  },
  {
    title: "Personal Loan Calculator",
    description:
      "Calculate your personal loan EMI, interest and repayment.",
    icon: "💼",
    path: "/loans/personal-loan",
  },
];

function Loans() {
  const navigate = useNavigate();

  const openCalculator = (path) => {
    navigate(path);
  };

  return (
    <section className="loans-page">

      <div className="loans-header">

        <h1>Loan Calculators</h1>

        <p>
          Choose a calculator below to understand your
          loan EMI, interest and total repayment.
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
              onClick={() =>
                openCalculator(item.path)
              }
            >
              Calculate now →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Loans;