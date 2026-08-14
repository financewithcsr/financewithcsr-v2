import "./GrowthTable.css";

function GrowthTable({
  monthlyInvestment,
  annualReturn,
  years,
}) {
  const rows = [];

  const monthlyRate = annualReturn / 12 / 100;

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
      returns: maturity - invested,
      total: maturity,
    });
  }

  return (
    <div className="growth-table">

      <h2>Year-wise Investment Growth</h2>

      <table>

        <thead>

          <tr>
            <th>Year</th>
            <th>Invested Amount</th>
            <th>Returns</th>
            <th>Total Value</th>
          </tr>

        </thead>

        <tbody>

          {rows.map((row) => (

            <tr key={row.year}>

              <td>{row.year}</td>

              <td>
                ₹ {row.invested.toLocaleString("en-IN")}
              </td>

              <td style={{ color: "#16A34A" }}>
                ₹{" "}
                {row.returns.toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                })}
              </td>

              <td style={{ fontWeight: 600 }}>
                ₹{" "}
                {row.total.toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                })}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default GrowthTable;