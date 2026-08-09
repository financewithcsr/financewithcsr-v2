function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-left">
          <span className="hero-badge">India's Smart Finance Platform</span>

          <h1>
            Make Better <br />
            Financial Decisions.
          </h1>

          <p>
            Investment Calculators, Loan Calculators, Tax Planning,
            SIP Planning and Financial Tools — All in One Place.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Explore Calculators
            </button>

            <button className="btn-secondary">
              Read Blogs
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <h3>₹1,25,000</h3>
            <p>Monthly Investment Goal</p>
          </div>

          <div className="hero-card">
            <h3>12%</h3>
            <p>Expected Annual Return</p>
          </div>

          <div className="hero-card">
            <h3>₹2.15 Cr</h3>
            <p>Future Wealth</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;