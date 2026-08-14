import "./RDBenefits.css";

function RDBenefits() {
  const benefits = [
    {
      title: "Safe and Regular Savings",
      description:
        "An RD helps you save a fixed amount every month and build a disciplined savings habit.",
    },
    {
      title: "Guaranteed Returns",
      description:
        "Recurring Deposits generally offer predetermined interest rates, helping you estimate your maturity amount.",
    },
    {
      title: "Flexible Tenure",
      description:
        "Choose a suitable RD tenure based on your financial goal and monthly savings capacity.",
    },
    {
      title: "Low Risk Investment",
      description:
        "RDs are generally considered a low-risk savings option compared with market-linked investments.",
    },
  ];

  return (
    <section className="rd-benefits-section">
      <h2>Benefits of Using RD Calculator</h2>

      <div className="rd-benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="rd-benefit-card" key={index}>
            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RDBenefits;