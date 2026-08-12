import "./CompareSIP.css";

function CompareSIP({
  monthlyInvestment,
  annualReturn,
  years,
}) {
  const monthlyRate = annualReturn / 12 / 100;
  const months = years * 12;

  const calculate = (sip) => {
    const invested = sip * months;

    const maturity =
      monthlyRate === 0
        ? invested
        : sip *
          (((Math.pow(1 + monthlyRate, months) - 1) /
            monthlyRate) *
            (1 + monthlyRate));

    return {
      invested,
      returns: maturity - invested,
      maturity,
    };
  };

  const current = calculate(monthlyInvestment);
  const upgraded = calculate(monthlyInvestment + 2500);

  const format = (value) =>
    "₹ " + Math.round(value).toLocaleString("en-IN");

  return (
    <section className="compare-sip">

      <h2>📊 Compare Your SIP</h2>

      <table>

        <thead>
          <tr>
            <th>Particular</th>
            <th>Current SIP</th>
            <th>+ ₹2,500 SIP</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Monthly SIP</td>
            <td>{format(monthlyInvestment)}</td>
            <td>{format(monthlyInvestment + 2500)}</td>
          </tr>

          <tr>
            <td>Invested Amount</td>
            <td>{format(current.invested)}</td>
            <td>{format(upgraded.invested)}</td>
          </tr>

          <tr>
            <td>Estimated Returns</td>
            <td>{format(current.returns)}</td>
            <td>{format(upgraded.returns)}</td>
          </tr>

          <tr>
            <td>Total Value</td>
            <td>{format(current.maturity)}</td>
            <td>{format(upgraded.maturity)}</td>
          </tr>

        </tbody>

      </table>

      <div className="compare-highlight">

        💡 Investing an extra
        <strong> ₹2,500/month </strong>

        could generate

        <strong>
          {" "}
          {format(
            upgraded.maturity -
              current.maturity
          )}{" "}
        </strong>

        more wealth over
        <strong> {years} years</strong>.

      </div>

    </section>
  );
}

export default CompareSIP;