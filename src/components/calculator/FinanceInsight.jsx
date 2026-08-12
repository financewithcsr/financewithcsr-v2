import "./FinanceInsight.css";

function FinanceInsight({
  monthlyInvestment,
  annualReturn,
  years,
}) {
  const monthlyRate = annualReturn / 12 / 100;
  const months = years * 12;

  const calculateMaturity = (investment) => {
    if (monthlyRate === 0) {
      return investment * months;
    }

    return (
      investment *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate))
    );
  };

  const currentValue = calculateMaturity(monthlyInvestment);

  const increasedInvestment = monthlyInvestment + 1000;

  const increasedValue = calculateMaturity(
    increasedInvestment
  );

  const additionalWealth = increasedValue - currentValue;

  const formatCurrency = (value) => {
    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <section className="finance-insight">

      <div className="insight-icon">
        💡
      </div>

      <div className="insight-content">

        <span className="insight-label">
          FinanceWithCSR Insight
        </span>

        <h2>
          What if you increase your SIP by ₹1,000?
        </h2>

        <p>
          With the same expected return of{" "}
          <strong>{annualReturn}%</strong> and investment
          period of <strong>{years} years</strong>, increasing
          your monthly SIP from{" "}
          <strong>{formatCurrency(monthlyInvestment)}</strong>{" "}
          to{" "}
          <strong>{formatCurrency(increasedInvestment)}</strong>{" "}
          could increase your final wealth by:
        </p>

        <div className="insight-value">
          {formatCurrency(additionalWealth)}
        </div>

        <div className="insight-comparison">

          <div>
            <span>Current SIP</span>
            <strong>
              {formatCurrency(currentValue)}
            </strong>
          </div>

          <div className="insight-arrow">
            →
          </div>

          <div>
            <span>With ₹1,000 Extra</span>
            <strong>
              {formatCurrency(increasedValue)}
            </strong>
          </div>

        </div>

        <p className="insight-footer">
          Small increases in your monthly investment can
          create a meaningful difference over long periods
          because of the power of compounding.
        </p>

      </div>

    </section>
  );
}

export default FinanceInsight;