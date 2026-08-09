function CalculatorSection() {
  const calculators = [
    {
      title: "SIP Calculator",
      description: "Calculate your future wealth with monthly SIP investments.",
    },
    {
      title: "EMI Calculator",
      description: "Know your monthly EMI before taking a loan.",
    },
    {
      title: "Income Tax Calculator",
      description: "Estimate your tax under the old and new regime.",
    },
    {
      title: "FD Calculator",
      description: "Calculate maturity amount and interest earned.",
    },
    {
      title: "PPF Calculator",
      description: "Estimate your long-term PPF returns.",
    },
    {
      title: "Retirement Calculator",
      description: "Plan your retirement corpus with confidence.",
    },
  ];

  return (
    <section className="calculator-section">
      <div className="container">
        <h2 className="section-title">Featured Calculators</h2>

        <p className="section-subtitle">
          Powerful financial tools to help you make smarter money decisions.
        </p>

        <div className="calculator-grid">
          {calculators.map((item) => (
            <div className="calculator-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <button>Open Calculator →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CalculatorSection;