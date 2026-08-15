function GrowthTable({
  deposit,
  interestRate,
  years,
}) {
  const rows = [];

  for (let year = 1; year <= years; year++) {
    const maturityValue =
      deposit *
      Math.pow(1 + interestRate / 100, year);

    const interestEarned =
      maturityValue - deposit;

    rows.push({
      year,
      deposit,
      interestEarned,
      maturityValue,
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
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
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
          Year-wise FD Growth
        </h2>

        <p
          style={{
            marginTop: "10px",
            marginBottom: 0,
            fontSize: "16px",
            color: "#64748B",
          }}
        >
          See how your Fixed Deposit can grow year by year.
        </p>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "600px",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#EFF6FF",
              }}
            >
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
                Deposit Amount
              </th>

              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  color: "#0F172A",
                }}
              >
                Interest Earned
              </th>

              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  color: "#0F172A",
                }}
              >
                Maturity Value
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
                    color: "#475569",
                  }}
                >
                  {formatCurrency(row.deposit)}
                </td>

                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #E2E8F0",
                    color: "#16A34A",
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.interestEarned)}
                </td>

                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #E2E8F0",
                    color: "#2563EB",
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.maturityValue)}
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