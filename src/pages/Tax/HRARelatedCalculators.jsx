import { useNavigate } from "react-router-dom";

function HRARelatedCalculators() {
  const navigate = useNavigate();

  const calculators = [
    {
      title: "Income Tax Calculator",
      description:
        "Calculate your estimated income tax and total tax payable.",
      icon: "🧮",
      path: "/tax/income-tax",
    },
    {
      title: "Old vs New Tax Regime",
      description:
        "Compare both tax regimes and understand which may result in lower tax.",
      icon: "⚖️",
      path: "/tax/regime-comparison",
    },
    {
      title: "HRA Calculator",
      description:
        "Calculate your HRA exemption based on salary, rent and city type.",
      icon: "🏠",
      path: "/tax/hra",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "35px",
        border: "1px solid #E2E8F0",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.06)",
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
          Related Tax Calculators
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Explore other calculators to understand
          your tax position and plan your finances.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3, minmax(0, 1fr))",
          gap: "20px",
        }}
      >
        {calculators.map((calculator) => (
          <div
            key={calculator.title}
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
              {calculator.icon}
            </div>

            <h3
              style={{
                margin:
                  "0 0 8px",
                color: "#0F172A",
                fontSize: "18px",
              }}
            >
              {calculator.title}
            </h3>

            <p
              style={{
                margin:
                  "0 0 18px",
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {calculator.description}
            </p>

            <button
              type="button"
              onClick={() =>
                navigate(
                  calculator.path
                )
              }
              style={{
                width: "100%",
                border: "none",
                borderRadius: "10px",
                padding:
                  "12px 16px",
                background: "#2563EB",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Open Calculator →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HRARelatedCalculators;