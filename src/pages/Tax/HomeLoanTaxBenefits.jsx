function HomeLoanTaxBenefits() {
  const benefits = [
    {
      icon: "🏠",
      title: "Understand Home Loan Deductions",
      description:
        "See how eligible home-loan principal and interest payments can contribute to your tax deductions under the applicable provisions.",
    },
    {
      icon: "💰",
      title: "Track Principal Repayment",
      description:
        "Understand how much of your eligible home-loan principal repayment may fall within the combined Section 80C limit.",
    },
    {
      icon: "📉",
      title: "Track Interest Deduction",
      description:
        "See the eligible portion of your home-loan interest payment under Section 24(b) for qualifying self-occupied property cases.",
    },
    {
      icon: "🧮",
      title: "Estimate Tax Benefit",
      description:
        "Estimate the potential reduction in tax based on your eligible deductions and illustrative marginal tax rate.",
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
          Home Loan Tax Benefits
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Understand the major tax deductions that
          may apply to eligible home-loan payments
          under the Old Tax Regime.
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
          background: "#FFF7ED",
          border:
            "1px solid #FED7AA",
          color: "#9A3412",
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        <strong>Important:</strong>{" "}
        Home-loan tax benefits depend on factors
        such as property type, loan purpose,
        possession/completion status and the
        applicable tax provisions. This calculator
        is intended for estimation and planning.
      </div>
    </section>
  );
}

export default HomeLoanTaxBenefits;