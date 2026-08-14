function Stats() {
  const stats = [
    {
      number: "25+",
      title: "Financial Calculators",
    },
    {
      number: "100+",
      title: "Finance Articles",
    },
    {
      number: "1M+",
      title: "Calculations Performed",
    },
    {
      number: "24×7",
      title: "Free Access",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "42px 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",

          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "18px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.title}
            style={{
              background: "#ffffff",
              border: "1px solid #dbe3ef",
              borderRadius: "14px",

              padding: "24px 16px",

              textAlign: "center",

              boxShadow:
                "0 6px 18px rgba(15, 23, 42, 0.06)",

              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: "0",

                color: "#0f172a",

                fontSize: "30px",
                lineHeight: "1.2",
                fontWeight: "800",
              }}
            >
              {stat.number}
            </h2>

            <p
              style={{
                margin: "8px 0 0",

                color: "#64748b",

                fontSize: "13px",
                lineHeight: "1.4",
                fontWeight: "500",
              }}
            >
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 800px) {
            section > div {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 500px) {
            section > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Stats;