import "./Tax.css";
import { useNavigate } from "react-router-dom";

import TaxBenefits from "./TaxBenefits";
import TaxFAQ from "./TaxFAQ";
import TaxRelatedCalculators from "./TaxRelatedCalculators";

const calculators = [
  {
    title: "Income Tax Calculator",
    description:
      "Calculate your estimated income tax, taxable income and total tax payable.",
    icon: "🧮",
    path: "/tax/income-tax",
  },
  {
    title: "Old vs New Tax Regime",
    description:
      "Compare both tax regimes and see which option may result in lower tax.",
    icon: "⚖️",
    path: "/tax/regime-comparison",
  },
  {
    title: "HRA Calculator",
    description:
      "Calculate your HRA exemption and understand how much HRA may be taxable.",
    icon: "🏠",
    path: "/tax/hra",
  },
  {
    title: "80C Tax Saving Calculator",
    description:
      "Calculate your eligible 80C deduction and understand your potential tax benefit.",
    icon: "💰",
    path: "/tax/80c",
  },
  {
    title: "Home Loan Tax Benefits",
    description:
      "Estimate your eligible home-loan deductions under Section 80C and Section 24(b).",
    icon: "🏡",
    path: "/tax/home-loan-benefits",
  },
];

function Tax() {
  const navigate = useNavigate();

  const openCalculator = (path) => {
    navigate(path);
  };

  return (
    <section className="tax-page">

      {/* =========================
          TAX HEADER
      ========================= */}

      <div className="tax-header">

        <h1>Tax Calculators</h1>

        <p>
          Calculate your income tax, compare tax
          regimes, estimate HRA exemption and
          plan your tax-saving investments.
        </p>

      </div>

      {/* =========================
          CALCULATORS
      ========================= */}

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
              Open Calculator →
            </button>

          </div>

        ))}

      </div>

      {/* =========================
          TAX BENEFITS
      ========================= */}

      <div
        style={{
          marginTop: "45px",
        }}
      >
        <TaxBenefits />
      </div>

      {/* =========================
          TAX FAQ
      ========================= */}

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <TaxFAQ />
      </div>

      {/* =========================
          RELATED CALCULATORS
      ========================= */}

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <TaxRelatedCalculators />
      </div>

    </section>
  );
}

export default Tax;