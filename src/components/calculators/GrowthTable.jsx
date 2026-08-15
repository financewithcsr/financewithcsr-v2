import "./GrowthTable.css";

function GrowthTable({
  monthlyInvestment,
  annualReturn,
  years,
  stepUp = 0,
}) {
  const rows = [];

  const monthlyRate = annualReturn / 12 / 100;

  let investedAmount = 0;
  let totalValue = 0;

  for (let year = 1; year <= years; year++) {

    // SIP amount for the current year
    const yearlyMonthlyInvestment =
      monthlyInvestment *
      Math.pow(1 + stepUp / 100, year - 1);

    // Calculate each month's investment
    for (let month = 1; month <= 12; month++) {

      investedAmount += yearlyMonthlyInvestment;

      totalValue =
        (totalValue + yearlyMonthlyInvestment) *
        (1 + monthlyRate);
    }

    const returns = totalValue - investedAmount;

    rows.push({
      year,
      monthlyInvestment: yearlyMonthlyInvestment,
      invested: investedAmount,
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

        <h2>
          Year-wise Investment Growth
        </h2>

        <p>
          See how your SIP investment can grow year by year.
        </p>

      </div>

      <div className="growth-table-wrapper">

        <table>

          <thead>

            <tr>
              <th>Year</th>

              <th>Monthly SIP</th>

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
                  {formatCurrency(row.monthlyInvestment)}
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