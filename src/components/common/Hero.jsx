import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          🇮🇳 FinanceWithCSR
        </span>

        <h1>
          India's Smart Personal
          <br />
          Finance Calculator Hub
        </h1>

        <p>
          Calculate SIP, FD, RD, PPF, EMI, Home Loan,
          Car Loan, Personal Loan, CAGR and many more
          with beautiful charts and instant insights.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() => navigate("/investments")}
          >
            Explore Calculators
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/investments/sip")}
          >
            SIP Calculator
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <h3>💰 Monthly SIP</h3>

          <h1>₹5,000</h1>

          <p>20 Years @ 12%</p>

          <div className="hero-result">

            <span>Future Value</span>

            <strong>₹49.95 Lakhs</strong>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;