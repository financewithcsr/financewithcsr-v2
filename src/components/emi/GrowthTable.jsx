function GrowthTable({
  loanAmount,
  interestRate,
  years,
}) {
  const rows = [];

  const monthlyRate =
    interestRate / 12 / 100;

  const months =
    years * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (
          loanAmount *
          monthlyRate *
          Math.pow(
            1 + monthlyRate,
            months
          )
        ) /
        (
          Math.pow(
            1 + monthlyRate,
            months
          ) - 1
        );

  let balance = loanAmount;
  let totalPrincipal = 0;
  let totalInterest = 0;

  for (let month = 1; month <= months; month++) {
    const interest =
      monthlyRate === 0
        ? 0
        : balance * monthlyRate;

    const principal =
      emi - interest;

    balance -= principal;

    if (balance < 0) {
      balance = 0;
    }

    totalPrincipal += principal;
    totalInterest += interest;

    if (month % 12 === 0 || month === months) {
      rows.push({
        year: Math.ceil(month / 12),
        principal: totalPrincipal,
        interest: totalInterest,
        balance,
      });
    }
  }

  const formatCurrency = (value) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`;

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
      <h2
        style={{
          margin: "0 0 10px",
          fontSize: "28px",
          color: "#0F172A",
        }}
      >
        Year-wise EMI Repayment
      </h2>

      <p
        style={{
          margin: "0 0 24px",
          color: "#64748B",
          fontSize: "16px",
        }}
      >
        See how your loan principal, interest and
        outstanding balance change year by year.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            minWidth: "650px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#EFF6FF",
              }}
            >
              <th style={headerStyle}>
                Year
              </th>

              <th style={headerStyle}>
                Principal Repaid
              </th>

              <th style={headerStyle}>
                Interest Paid
              </th>

              <th style={headerStyle}>
                Outstanding Balance
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.year}>
                <td style={cellStyle}>
                  Year {row.year}
                </td>

                <td
                  style={{
                    ...cellStyle,
                    color: "#2563EB",
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.principal)}
                </td>

                <td
                  style={{
                    ...cellStyle,
                    color: "#16A34A",
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.interest)}
                </td>

                <td
                  style={{
                    ...cellStyle,
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(row.balance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const headerStyle = {
  padding: "15px",
  textAlign: "left",
  color: "#0F172A",
  fontWeight: 600,
};

const cellStyle = {
  padding: "15px",
  textAlign: "left",
  borderBottom: "1px solid #E2E8F0",
  color: "#475569",
};

export default GrowthTable;