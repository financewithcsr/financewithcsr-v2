import "../calculators/SIPBenefits.css";

const benefits = [
  {
    icon: "💰",
    title: "One-Time Investment",
    description:
      "Invest once and let your money grow over time without making monthly contributions.",
  },
  {
    icon: "📈",
    title: "Power of Compounding",
    description:
      "Your investment earns returns, and those returns continue generating additional returns over the years.",
  },
  {
    icon: "⏳",
    title: "Long-Term Wealth Creation",
    description:
      "A lumpsum investment can create significant wealth when invested for the long term.",
  },
  {
    icon: "🎯",
    title: "Ideal for Bonus or Windfall",
    description:
      "Perfect for investing bonuses, inheritance, maturity proceeds, or any surplus funds.",
  },
  {
    icon: "📊",
    title: "Simple Investment",
    description:
      "No monthly commitments. Invest once and monitor your portfolio periodically.",
  },
  {
    icon: "🚀",
    title: "Potential for Higher Returns",
    description:
      "If invested wisely in suitable instruments, lumpsum investments can generate attractive long-term returns.",
  },
];

function LumpsumBenefits() {
  return (
    <section className="benefits">
      <div className="container">
        <h2>Why Choose a Lumpsum Investment?</h2>

        <p>
          A one-time investment is ideal for investors who have surplus money
          and want to maximize long-term wealth through the power of
          compounding.
        </p>

        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <h3>
                {benefit.icon} {benefit.title}
              </h3>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LumpsumBenefits;