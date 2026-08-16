function EightyCBenefits() {
  const benefits = [
    {
      icon: "💰",
      title: "Understand Your 80C Limit",
      description:
        "See how much of your eligible investments can actually be claimed as a deduction under the combined Section 80C limit.",
    },
    {
      icon: "📊",
      title: "Track Your Investments",
      description:
        "Add your eligible investments such as EPF, PPF, ELSS, insurance premiums and home-loan principal to see your total.",
    },
    {
      icon: "🎯",
      title: "Find Your Remaining Limit",
      description:
        "Know how much of the ₹1.5 lakh combined limit you may still be able to utilise.",
    },
    {
      icon: "🧾",
      title: "Estimate Tax Benefit",
      description:
        "Understand the approximate tax impact of your eligible deduction based on different marginal tax rates.",
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
          80C Tax Saving Benefits
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Understand how eligible investments can
          help reduce taxable income under the Old
          Tax Regime.
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
        Section 80C deductions are generally
        available under the Old Tax Regime. The
        combined limit for eligible 80C, 80CCC and
        80CCD(1) contributions is ₹1,50,000.
      </div>
    </section>
  );
}

export default EightyCBenefits;