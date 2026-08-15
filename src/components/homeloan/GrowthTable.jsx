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
  let totalPaid = 0;
  let totalInterest = 0;

  for (let year = 1; year <= years; year++) {
    let yearlyInterest = 0;

    for (let month = 1; month <= 12; month++) {
      const interest =
        balance * monthlyRate;

      const principal =
        emi - interest;

      balance =
        Math.max(
          0,
          balance - principal
        );

      yearlyInterest += interest;
      totalInterest += interest;
      totalPaid += emi;
    }

    rows.push({
      year,
      emi,
      yearlyInterest,
      totalInterest,
      balance,
      totalPaid,
    });
  }

  const formatCurrency = (value) =>
    `₹ ${Math.round(value).toLocaleString("en-IN")}`;

  return (
    <div
      className="growth-table"
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "25px",
        marginTop: "20px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2>
        Year-wise Home Loan Repayment
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "20px",
        }}
      >
        See how your home loan balance,
        interest and repayment change year
        by year.
      </p>

      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Monthly EMI</th>
              <th>Interest Paid</th>
              <th>Remaining Loan</th>
              <th>Total Paid</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.year}>
                <td>
                  Year {row.year}
                </td>

                <td>
                  {formatCurrency(row.emi)}
                </td>

                <td
                  style={{
                    color: "#16A34A",
                  }}
                >
                  {formatCurrency(
                    row.yearlyInterest
                  )}
                </td>

                <td
                  style={{
                    fontWeight: 600,
                  }}
                >
                  {formatCurrency(
                    row.balance
                  )}
                </td>

                <td>
                  {formatCurrency(
                    row.totalPaid
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GrowthTable;