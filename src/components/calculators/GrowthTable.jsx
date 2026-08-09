function GrowthTable({
  monthlyInvestment,
  annualReturn,
  years,
}) {
  const monthlyRate = annualReturn / 12 / 100;

  const rows = [];

  for (let year = 1; year <= years; year++) {
    const months = year * 12;

    const invested = monthlyInvestment * months;

    const maturity =
      monthlyRate === 0
        ? invested
        : monthlyInvestment *
          (((Math.pow(1 + monthlyRate, months) - 1) /
            monthlyRate) *
            (1 + monthlyRate));

    rows.push({
      year,
      invested,
      maturity,
    });
  }

  return (
    <div
      style={{
        marginTop: "60px",
        background: "#fff",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h2>Year-wise Growth</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "25px",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#EFF6FF",
            }}
          >
            <th style={{ padding: "14px" }}>Year</th>

            <th>Investment</th>

            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.year}
              style={{
                borderBottom:
                  "1px solid #E5E7EB",
              }}
            >
              <td style={{ padding: "14px" }}>
                {row.year}
              </td>

              <td>
                ₹{" "}
                {row.invested.toLocaleString(
                  "en-IN"
                )}
              </td>

              <td>
                ₹{" "}
                {row.maturity.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 0,
                  }
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GrowthTable;