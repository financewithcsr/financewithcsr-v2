function GrowthTable({
  initialValue,
  finalValue,
  years,
}) {
  const rows = [];

  const cagr =
    initialValue > 0 && years > 0
      ? Math.pow(
          finalValue / initialValue,
          1 / years
        ) - 1
      : 0;

  for (let year = 0; year <= years; year++) {
    const value =
      initialValue *
      Math.pow(1 + cagr, year);

    rows.push({
      year,
      value,
      returns: value - initialValue,
    });
  }

  const formatCurrency = (value) => {
    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <section
      style={{
        marginTop: "24px",
        background: "#ffffff",
        border: "1px solid #E2E8F0",
        borderRadius: "20px",
        padding: "28px",
        boxShadow:
          "0 8px 24px rgba(15, 23, 42, 0.06)",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: 700,
            color: "#0F172A",
          }}
        >
          Year-wise CAGR Growth
        </h2>

        <p
          style={{
            marginTop: "10px",
            marginBottom: 0,
            fontSize: "16px",
            color: "#64748B",
          }}
        >
          See how your investment value grows each year at the calculated CAGR.
        </p>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            minWidth: "600px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#EFF6FF" }}>
              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  color: "#0F172A",
                }}
              >
                Year
              </th>

              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  color: "#0F172A",
                }}
              >
                Investment Value
              </th>

              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  color: "#0F172A",
                }}
              >
                Returns
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.year}>
                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #E2E8F0",
                    color: "#475569",
                  }}
                >
                  Year {row.year}
                </td>

                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #E2E8F0",
                    color: "#2563EB",
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.value)}
                </td>

                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #E2E8F0",
                    color: "#16A34A",
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.returns)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default GrowthTable;