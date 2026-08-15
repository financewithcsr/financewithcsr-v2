import "./LumpsumBenefits.css";

function LumpsumBenefits() {
  const benefits = [
    {
      icon: "💰",
      title: "One-Time Investment",
      description:
        "Invest a lump sum amount once and allow your money to grow over time.",
    },
    {
      icon: "📈",
      title: "Compounding Growth",
      description:
        "Your investment can benefit from the power of compounding over a longer period.",
    },
    {
      icon: "🎯",
      title: "Goal Planning",
      description:
        "Estimate how your one-time investment can grow towards your financial goals.",
    },
    {
      icon: "⏳",
      title: "Long-Term Wealth",
      description:
        "Staying invested for a longer period can help you build a larger investment corpus.",
    },
  ];

  return (
    <section className="lumpsum-benefits">

      <div className="lumpsum-benefits-header">
        <h2>Benefits of Lumpsum Investing</h2>

        <p>
          Understand how a one-time investment can help you plan and grow
          your wealth over the long term.
        </p>
      </div>

      <div className="lumpsum-benefits-grid">

        {benefits.map((benefit) => (
          <div
            className="lumpsum-benefit-card"
            key={benefit.title}
          >
            <div className="lumpsum-benefit-icon">
              {benefit.icon}
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default LumpsumBenefits;