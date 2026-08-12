import "./SIPBenefits.css";

const benefits = [
  {
    icon: "📈",
    title: "Power of Compounding",
    description:
      "Your returns generate additional returns over time, helping your wealth grow faster."
  },
  {
    icon: "💰",
    title: "Affordable Investing",
    description:
      "Start investing with a small monthly amount and gradually build a large corpus."
  },
  {
    icon: "📅",
    title: "Disciplined Savings",
    description:
      "Invest automatically every month and stay consistent with your financial goals."
  },
  {
    icon: "⚖️",
    title: "Rupee Cost Averaging",
    description:
      "Buy more units when prices are low and fewer when prices are high, reducing market timing risk."
  },
  {
    icon: "🛡️",
    title: "Lower Investment Risk",
    description:
      "Regular investing helps reduce the impact of short-term market fluctuations."
  },
  {
    icon: "🎯",
    title: "Achieve Financial Goals",
    description:
      "Whether it's retirement, a house, or your child's education, SIP helps you stay on track."
  }
];

function SIPBenefits() {
  return (
    <section className="sip-benefits">

      <h2>Why Should You Invest Through SIP?</h2>

      <p className="benefits-subtitle">
        Systematic Investment Plans help investors build wealth over the long term through disciplined and consistent investing.
      </p>

      <div className="benefits-grid">

        {benefits.map((benefit, index) => (

          <div className="benefit-card" key={index}>

            <div className="benefit-icon">
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

export default SIPBenefits;