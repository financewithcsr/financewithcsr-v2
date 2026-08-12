import "./WhyChoose.css";

const features = [
  {
    icon: "⚡",
    title: "Fast Calculations",
    description:
      "Get accurate financial results instantly without waiting or complicated formulas.",
  },
  {
    icon: "🎯",
    title: "Accurate Results",
    description:
      "All calculators are based on standard financial formulas used by professionals.",
  },
  {
    icon: "🔒",
    title: "100% Free",
    description:
      "No signup. No subscriptions. Every calculator is completely free forever.",
  },
  {
    icon: "🇮🇳",
    title: "Made for India",
    description:
      "Designed specifically for Indian investors, salaried employees and families.",
  },
];

function WhyChoose() {
  return (
    <section className="why">
      <div className="why-container">

        <div className="section-title">
          <span>WHY FINANCEWITHCSR?</span>

          <h2>
            Everything You Need to
            <br />
            Make Better Money Decisions
          </h2>

          <p>
            Whether you're planning investments, calculating EMIs,
            saving taxes or preparing for retirement,
            FinanceWithCSR gives you powerful tools to make smarter
            financial decisions.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;