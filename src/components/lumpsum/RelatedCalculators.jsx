import { useNavigate } from "react-router-dom";

const calculators = [
  {
    title: "SIP Calculator",
    path: "/investments/sip",
  },
  {
    title: "FD Calculator",
    path: "/investments/fd",
  },
  {
    title: "RD Calculator",
    path: "/investments/rd",
  },
  {
    title: "PPF Calculator",
    path: "/investments/ppf",
  },
  {
    title: "CAGR Calculator",
    path: "/investments/cagr",
  },
];

function RelatedCalculators() {
  const navigate = useNavigate();

  return (
    <section
      className="related-calculators"
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          color: "#0f172a",
          fontSize: "28px",
        }}
      >
        Explore More Investment Calculators
      </h2>

      <div
        className="related-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "18px",
        }}
      >
        {calculators.map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            style={{
              padding: "22px",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              cursor: "pointer",
              background: "#f8fafc",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                color: "#0f172a",
                fontSize: "18px",
              }}
            >
              {item.title}
            </h3>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate(item.path);
              }}
              style={{
                border: "none",
                background: "#2563eb",
                color: "#ffffff",
                padding: "10px 14px",
                borderRadius: "8px",
                fontWeight: "600",
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

export default RelatedCalculators;