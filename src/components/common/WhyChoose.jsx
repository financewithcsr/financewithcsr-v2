import "./WhyChoose.css";

const features = [
  {
    icon: "⚡",
    title: "Fast Calculations",
    description:
      "Get financial results instantly without complicated formulas or manual calculations.",
  },
  {
    icon: "🎯",
    title: "Accurate Results",
    description:
      "Use standard financial formulas to understand your investments, loans and savings.",
  },
  {
    icon: "🔒",
    title: "100% Free",
    description:
      "No signup, no subscription and no hidden charges. Use our calculators whenever you need.",
  },
  {
    icon: "🇮🇳",
    title: "Made for India",
    description:
      "Built for Indian investors, salaried employees and families to make better money decisions.",
  },
];

function WhyChoose() {
  return (
    <section className="why">
      <div className="why-container">

        <div className="why-heading">
          <span className="why-tag">
            WHY FINANCEWITHCSR?
          </span>

          <h2>
            Everything You Need to
            <br />
            Make Better Money Decisions
          </h2>

          <p>
            Whether you're planning investments, calculating EMIs,
            saving taxes or preparing for the future, FinanceWithCSR
            gives you simple tools to understand your money better.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item) => (
            <div className="why-card" key={item.title}>

              <div className="why-icon">
                {item.icon}
              </div>

              <div className="why-content">
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;