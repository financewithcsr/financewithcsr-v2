import { Link } from "react-router-dom";
import "./RelatedCalculators.css";

const calculators = [
  {
    title: "FD Calculator",
    description: "Calculate Fixed Deposit maturity amount.",
    link: "/investments/fd",
  },
  {
    title: "RD Calculator",
    description: "Estimate your Recurring Deposit returns.",
    link: "/investments/rd",
  },
  {
    title: "PPF Calculator",
    description: "Calculate your PPF maturity value.",
    link: "/investments/ppf",
  },
  {
    title: "EMI Calculator",
    description: "Calculate EMI for loans instantly.",
    link: "/loans/emi",
  },
];

function RelatedCalculators() {
  return (
    <section className="related-section">
      <div className="related-container">

        <div className="related-header">
          <h2>Related Calculators</h2>

          <p>
            Explore more financial calculators to make better money decisions.
          </p>
        </div>

        <div className="related-grid">
          {calculators.map((item, index) => (
            <div className="related-card" key={index}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <Link to={item.link}>
                Open Calculator →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RelatedCalculators;