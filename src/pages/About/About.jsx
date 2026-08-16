import { Link } from "react-router-dom";
import "../../styles/about.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-hero-content">

          <span className="about-eyebrow">
            ABOUT FINANCE WITH CSR
          </span>

          <h1>
            Making Personal Finance
            <span> Simple for Everyone.</span>
          </h1>

          <p>
            FinanceWithCSR is built to make personal finance
            easier to understand, calculate and plan without
            complicated financial jargon.
          </p>

        </div>
      </section>

      <section className="about-section">

        <div className="about-section-heading">

          <span className="about-label">
            OUR PURPOSE
          </span>

          <h2>
            Your money should work for you,
            not confuse you.
          </h2>

        </div>

        <div className="about-section-content">

          <p>
            Money decisions are a part of everyday life.
            Whether it is planning a salary, choosing a loan,
            investing for the future, understanding taxes or
            deciding how much you can actually afford, the
            numbers can often feel complicated.
          </p>

          <p>
            FinanceWithCSR brings these concepts into one
            simple platform where you can use calculators,
            explore financial concepts and make better-informed
            money decisions.
          </p>

        </div>

      </section>

      <section className="about-section about-offer-section">

        <div className="about-section-heading">

          <span className="about-label">
            WHAT WE OFFER
          </span>

          <h2>
            Practical tools for everyday
            financial decisions.
          </h2>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <div className="about-card-icon">🧮</div>

            <h3>
              Financial Calculators
            </h3>

            <p>
              Calculate SIPs, loans, EMIs, deposits,
              taxes and other important financial
              numbers before making a decision.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">📊</div>

            <h3>
              Financial Planning
            </h3>

            <p>
              Understand your money better through
              simple planning tools designed around
              real-life financial situations.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">💡</div>

            <h3>
              Financial Education
            </h3>

            <p>
              Learn personal finance concepts in a
              simple and practical way so you can make
              more informed decisions.
            </p>
          </div>

        </div>

      </section>

      <section className="about-approach">

        <div className="about-approach-inner">

          <div>
            <span className="about-label">
              OUR APPROACH
            </span>

            <h2>
              Simple.
              <br />
              Practical.
              <br />
              Transparent.
            </h2>
          </div>

          <div className="about-approach-text">

            <p>
              We believe financial information should be
              understandable to ordinary people, not just
              financial professionals.
            </p>

            <p>
              Our goal is to simplify the numbers, explain
              the concepts and provide useful tools that help
              you take the next financial decision with more
              confidence.
            </p>

            <p>
              The platform is designed for individuals and
              families looking to understand their finances
              better.
            </p>

          </div>

        </div>

      </section>

      <section className="about-message">

        <div className="about-message-box">

          <div className="about-message-logo">
            FINANCE
            <br />
            WITH CSR
          </div>

          <p>
            "Nuvvu money ni handle cheyyakapothe,
            money ninnu handle chesthundi."
          </p>

        </div>

      </section>

      <section className="about-cta">

        <h2>
          Ready to understand your money better?
        </h2>

        <p>
          Start with one of our free financial
          calculators.
        </p>

        <Link
          to="/investments"
          className="about-cta-button"
        >
          Explore Calculators →
        </Link>

      </section>

    </main>
  );
}

export default About;