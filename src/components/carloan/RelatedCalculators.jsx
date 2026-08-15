function RelatedCalculators() {
  const calculators = [
    {
      icon: "🏦",
      title: "EMI Calculator",
      description:
        "Calculate your monthly EMI, total interest and total repayment.",
      path: "/loans/emi",
    },
    {
      icon: "🏠",
      title: "Home Loan Calculator",
      description:
        "Calculate your home loan EMI and total interest payable.",
      path: "/loans/home-loan",
    },
    {
      icon: "💼",
      title: "Personal Loan Calculator",
      description:
        "Calculate your personal loan EMI and total repayment.",
      path: "/loans/personal-loan",
    },
    {
      icon: "📈",
      title: "SIP Calculator",
      description:
        "Estimate your potential SIP investment growth.",
      path: "/investments/sip",
    },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "30px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          margin: "0 0 10px",
          color: "#0F172A",
          fontSize: "28px",
        }}
      >
        Related Calculators
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "25px",
          lineHeight: 1.6,
        }}
      >
        Explore other calculators to compare
        different loan and investment scenarios.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2, minmax(0, 1fr))",
          gap: "18px",
        }}
      >
        {calculators.map((calculator) => (
          <a
            key={calculator.path}
            href={calculator.path}
            style={{
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              padding: "20px",
              background: "#F8FAFC",
              transition: "0.2s ease",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                marginBottom: "10px",
              }}
            >
              {calculator.icon}
            </div>

            <h3
              style={{
                margin: "0 0 8px",
                color: "#0F172A",
                fontSize: "17px",
              }}
            >
              {calculator.title}
            </h3>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {calculator.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default RelatedCalculators;