import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <span className="cta-badge">
          🚀 Start Your Financial Journey Today
        </span>

        <h2>
          Make Better Financial Decisions
          <br />
          With Powerful Free Calculators
        </h2>

        <p>
          Whether you're planning investments, calculating EMIs,
          saving taxes or preparing for retirement,
          FinanceWithCSR gives you everything you need —
          completely free.
        </p>

        <div className="cta-buttons">

          <Link to="/investments" className="cta-primary">
            Explore Calculators →
          </Link>

          <Link to="/blog" className="cta-secondary">
            Read Finance Articles
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTA;