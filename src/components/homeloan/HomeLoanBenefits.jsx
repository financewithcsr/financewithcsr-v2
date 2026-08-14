import "./HomeLoanBenefits.css";

function HomeLoanBenefits() {
  const benefits = [
    {
      title: "Easy EMI Planning",
      description:
        "Estimate your monthly EMI before taking a home loan and plan your monthly budget better.",
    },
    {
      title: "Know Total Interest",
      description:
        "Understand how much interest you'll pay over the entire loan tenure.",
    },
    {
      title: "Compare Loan Offers",
      description:
        "Change interest rates and compare different banks to choose the most affordable option.",
    },
    {
      title: "Financial Planning",
      description:
        "Know your total repayment amount and avoid borrowing more than you can comfortably repay.",
    },
  ];

  return (
    <section className="benefits-section">
      <h2>Benefits of Using Home Loan Calculator</h2>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div key={index} className="benefit-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeLoanBenefits;