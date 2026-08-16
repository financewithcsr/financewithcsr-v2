function TaxBenefits() {
  const benefits = [
    {
      icon: "🧾",
      title: "Understand Your Taxable Income",
      description:
        "See how your salary, other income and eligible deductions affect the income on which tax is calculated.",
    },
    {
      icon: "⚖️",
      title: "Compare Tax Regimes",
      description:
        "Compare the Old and New Tax Regimes to understand which one may result in lower tax for your situation.",
    },
    {
      icon: "💰",
      title: "Plan Your Tax Better",
      description:
        "Understanding your tax liability can help you plan your savings, investments and cash flow more effectively.",
    },
    {
      icon: "📊",
      title: "See Your Effective Tax Rate",
      description:
        "Your effective tax rate shows the approximate percentage of your gross income going towards tax.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "35px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.06)",
        border: "1px solid #E2E8F0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#0F172A",
            fontSize: "28px",
          }}
        >
          Tax Planning Benefits
        </h2>

        <p
          style={{
            margin:
              "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Understanding your tax position can help
          you make better financial decisions throughout
          the year.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2, minmax(0, 1fr))",
          gap: "20px",
        }}
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            style={{
              background: "#F8FAFC",
              borderRadius: "16px",
              padding: "22px",
              border:
                "1px solid #E2E8F0",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                marginBottom: "12px",
              }}
            >
              {benefit.icon}
            </div>

            <h3
              style={{
                margin:
                  "0 0 8px",
                color: "#0F172A",
                fontSize: "18px",
              }}
            >
              {benefit.title}
            </h3>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "25px",
          padding: "18px",
          borderRadius: "14px",
          background: "#EFF6FF",
          border:
            "1px solid #BFDBFE",
          color: "#1E3A8A",
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        <strong>Important:</strong>{" "}
        Tax calculations are estimates for
        informational purposes. Actual tax liability
        can vary based on your income sources,
        deductions, exemptions, special-rate income
        and other applicable tax provisions.
      </div>
    </section>
  );
}

export default TaxBenefits;