import "../calculators/GrowthTable.css";

function GrowthTable({
  investment,
  annualReturn,
  years,
}) {
  const rows = [];

  for (let year = 1; year <= years; year++) {
    const maturity =
      investment * Math.pow(1 + annualReturn / 100, year);

    rows.push({
      year,
      invested: investment,
      returns: maturity - investment,
      total: maturity,
    });
  }

  return (
    <section className="growth-table">

      <h2>Year-wise Lumpsum Growth</h2>

      <table>

        <thead>

          <tr>
            <th>Year</th>
            <th>Investment</th>
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

    </section>
  );
}

export default GrowthTable;