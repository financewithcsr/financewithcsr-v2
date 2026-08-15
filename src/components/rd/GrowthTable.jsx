function GrowthTable({
  monthlyDeposit,
  interestRate,
  years,
}) {
  const rows = [];

  const monthlyRate =
    interestRate / 12 / 100;

  for (let year = 1; year <= years; year++) {
    const months = year * 12;

    const invested =
      monthlyDeposit * months;

    const maturity =
      monthlyRate === 0
        ? invested
        : monthlyDeposit *
          (
            (Math.pow(1 + monthlyRate, months) - 1) /
            monthlyRate
          ) *
          (1 + monthlyRate);

    rows.push({
      year,
      invested,
      returns: maturity - invested,
      total: maturity,
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
          Year-wise RD Growth
        </h2>

        <p
          style={{
            marginTop: "10px",
            marginBottom: 0,
            fontSize: "16px",
            color: "#64748B",
          }}
        >
          See how your Recurring Deposit can grow year by year.
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
                Invested Amount
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
                Total Value
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
                  {formatCurrency(row.invested)}
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

                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #E2E8F0",
                    color: "#2563EB",
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.total)}
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