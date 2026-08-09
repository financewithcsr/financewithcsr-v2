import { Link } from "react-router-dom";

function Investments() {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <h1>Investment Calculators</h1>

      <p style={{ marginBottom: "40px" }}>
        Choose a calculator to start planning your investments.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h2>SIP Calculator</h2>

          <p>
            Calculate your future wealth based on monthly SIP investments.
          </p>

          <Link
            to="/investments/sip-calculator"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 22px",
              background: "#2563EB",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Open Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Investments;