import "./SummaryCard.css";
import AnimatedNumber from "../ui/AnimatedNumber";
import ShareResults from "./ShareResults";

function SummaryCard({
  monthlyInvestment,
  annualReturn,
  years,
  investedAmount,
  returns,
  totalValue,
}) {
  return (
    <div className="summary-card">

      <h2 className="summary-title">
        Investment Summary
      </h2>

      <div className="summary-box invested">
        <div className="summary-icon">💰</div>

        <div className="summary-content">
          <span>Invested Amount</span>

          <h3>
            <AnimatedNumber value={investedAmount} />
          </h3>
        </div>
      </div>

      <div className="summary-box returns">
        <div className="summary-icon">📈</div>

        <div className="summary-content">
          <span>Estimated Returns</span>

          <h3>
            <AnimatedNumber value={returns} />
          </h3>
        </div>
      </div>

      <div className="summary-box total">
        <div className="summary-icon">🏆</div>

        <div className="summary-content">
          <span>Total Value</span>

          <h2>
            <AnimatedNumber
              value={totalValue}
              duration={1500}
            />
          </h2>
        </div>
      </div>

      <ShareResults
        title="SIP Calculator"
        monthlyInvestment={monthlyInvestment}
        annualReturn={annualReturn}
        years={years}
        investedAmount={investedAmount}
        returns={returns}
        totalValue={totalValue}
      />

    </div>
  );
}

export default SummaryCard;