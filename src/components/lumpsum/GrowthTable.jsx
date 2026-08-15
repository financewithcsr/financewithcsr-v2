import "../calculators/GrowthTable.css";

function GrowthTable({
  investment,
  annualReturn,
  years,
}) {
  const rows = [];

  for (let year = 1; year <= years; year++) {
    const totalValue =
      investment *
      Math.pow(1 + annualReturn / 100, year);

    const returns = totalValue - investment;

    rows.push({
      year,
      invested: investment,
      returns,
      totalValue,
    });
  }

  const formatCurrency = (value) => {
    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <section className="growth-table">

      <div className="growth-table-header">

        <h2>Year-wise Investment Growth</h2>

        <p>
          See how your one-time investment can grow year by year.
        </p>

      </div>

      <div className="growth-table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Year</th>
              <th>Invested Amount</th>
              <th>Estimated Returns</th>
              <th>Total Value</th>
            </tr>
          </thead>

          <tbody>

            {rows.map((row) => (
              <tr key={row.year}>

                <td>
                  Year {row.year}
                </td>

                <td>
                  {formatCurrency(row.invested)}
                </td>

                <td className="returns-value">
                  {formatCurrency(row.returns)}
                </td>

                <td className="total-value">
                  {formatCurrency(row.totalValue)}
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