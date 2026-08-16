function HRABenefits() {
  const benefits = [
    {
      icon: "🏠",
      title: "Understand HRA Exemption",
      description:
        "See how much of your HRA may qualify for exemption based on rent, salary and the applicable limit.",
    },
    {
      icon: "💰",
      title: "Estimate Taxable HRA",
      description:
        "Understand how much of your HRA may remain taxable after applying the exemption calculation.",
    },
    {
      icon: "📊",
      title: "Compare HRA Components",
      description:
        "The calculator compares the three applicable HRA exemption limits and uses the lowest eligible amount.",
    },
    {
      icon: "🧾",
      title: "Plan Your Tax",
      description:
        "Understanding your HRA exemption can help you plan your salary structure and tax position more effectively.",
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
          HRA Tax Benefits
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Understand how HRA exemption can affect
          your taxable income under the applicable
          tax rules.
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
                margin: "0 0 8px",
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
        HRA exemption under Section 10(13A)
        is subject to the applicable conditions.
        This calculator is intended for estimation
        and financial planning purposes.
      </div>
    </section>
  );
}

export default HRABenefits;