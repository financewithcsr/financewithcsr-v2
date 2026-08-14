import "../calculators/SIPBenefits.css";

function FDBenefits() {
  return (
    <section className="benefits">
      <div className="container">

        <h2>Benefits of Using FD Calculator</h2>

        <p>
          An FD Calculator helps you estimate your Fixed Deposit maturity amount,
          interest earned and total returns before investing.
        </p>

        <div className="benefit-grid">

          <div className="benefit-card">
            <h3>Know Maturity Value</h3>

            <p>
              Instantly calculate how much your Fixed Deposit will grow.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Compare Interest Rates</h3>

            <p>
              Compare returns across different banks and FD tenures.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Better Financial Planning</h3>

            <p>
              Plan your savings with accurate maturity estimates.
            </p>
          </div>

          <div className="benefit-card">
            <h3>100% Free</h3>

            <p>
              Unlimited FD calculations without registration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FDBenefits;