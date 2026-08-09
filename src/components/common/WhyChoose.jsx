function WhyChoose() {
  const features = [
    {
      title: "100% Free",
      description: "Use all calculators and financial tools completely free.",
    },
    {
      title: "Accurate Calculations",
      description: "Reliable formulas with instant financial insights.",
    },
    {
      title: "Easy to Understand",
      description: "Simple language suitable for beginners and professionals.",
    },
    {
      title: "Regular Updates",
      description: "Latest tax rules, investment updates and finance articles.",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="section-title">Why Choose FinanceWithCSR?</h2>

        <div className="why-grid">
          {features.map((item) => (
            <div className="why-card" key={item.title}>
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