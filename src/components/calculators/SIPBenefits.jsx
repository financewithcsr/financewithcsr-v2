import "./SIPBenefits.css";

function SIPBenefits() {
  return (
    <section className="benefits">

      <div className="container">

        <h2>
          Benefits of Using SIP Calculator
        </h2>

        <p>
          A SIP Calculator helps investors estimate future wealth by
          calculating the maturity value of monthly investments.
          It makes investment planning simple and realistic.
        </p>

        <div className="benefit-grid">

          <div className="benefit-card">
            <h3>Plan Investments</h3>

            <p>
              Estimate how much your monthly SIP can grow over time.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Goal Planning</h3>

            <p>
              Know how much to invest monthly to reach financial goals.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Understand Compounding</h3>

            <p>
              Visualize how long-term investing creates wealth.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Free & Instant</h3>

            <p>
              Calculate unlimited SIP scenarios without registration.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default SIPBenefits;