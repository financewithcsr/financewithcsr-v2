import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero-wrapper">

        {/* LEFT */}

        <div className="hero-left">

          <span className="hero-badge">
            IN FinanceWithCSR
          </span>

          <h1>
            India's Smart Personal Finance Calculator Hub
          </h1>

          <p>
            Calculate SIP, FD, RD, PPF, EMI, Home Loan, Car Loan,
            Personal Loan, CAGR and more with simple calculations,
            beautiful charts and instant insights.
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

          <div className="hero-features">

            <span>✓ Free to use</span>

            <span>✓ Simple calculations</span>

            <span>✓ No registration</span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-card">

            <div className="hero-header">

              <h4>Financial Planning</h4>

              <span className="status-dot"></span>

            </div>

            <div className="hero-main">

              <div className="hero-icon">
                ₹
              </div>

              <div>

                <small>Plan your money better</small>

                <h2>
                  Calculate.
                  <br />
                  Compare.
                  <br />
                  Plan.
                </h2>

              </div>

            </div>

            <div className="hero-stats">

              <div className="stat-box">
                <strong>10+</strong>
                <span>Calculators</span>
              </div>

              <div className="stat-box">
                <strong>₹</strong>
                <span>Smart Planning</span>
              </div>

              <div className="stat-box">
                <strong>∞</strong>
                <span>Possibilities</span>
              </div>

            </div>

            <div className="chart-area">

              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>

              <span className="point p1"></span>
              <span className="point p2"></span>
              <span className="point p3"></span>
              <span className="point p4"></span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;