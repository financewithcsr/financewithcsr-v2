import { useState } from "react";
import InputSlider from "../ui/InputSlider";
import SIPChart from "./SIPChart";
import GrowthTable from "./GrowthTable";
import "./SIPCalculator.css";

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(20);

  const monthlyRate = annualReturn / 12 / 100;
  const months = years * 12;

  const maturityValue =
    monthlyRate === 0
      ? monthlyInvestment * months
      : monthlyInvestment *
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate));

  const investedAmount = monthlyInvestment * months;
  const wealthGained = maturityValue - investedAmount;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "30px",
        }}
      >
        {/* Left Card */}
        <div className="sip-card">
          <h1>SIP Calculator</h1>

          <p>
            Calculate your future wealth using monthly SIP investments.
          </p>

          <InputSlider
            label="Monthly Investment"
            value={monthlyInvestment}
            setValue={setMonthlyInvestment}
            min={500}
            max={100000}
            step={500}
            prefix="₹ "
          />

          <InputSlider
            label="Expected Annual Return"
            value={annualReturn}
            setValue={setAnnualReturn}
            min={1}
            max={30}
            suffix="%"
          />

          <InputSlider
            label="Investment Period"
            value={years}
            setValue={setYears}
            min={1}
            max={40}
            suffix=" Years"
          />
        </div>

        {/* Right Card */}
        <div className="summary-card">
          <h2>Investment Summary</h2>

          <SIPChart
            investedAmount={investedAmount}
            wealthGained={wealthGained}
          />

          <div className="summary-item">
            <small>Total Investment</small>
            <h2>₹ {investedAmount.toLocaleString("en-IN")}</h2>
          </div>

          <div className="summary-item">
            <small>Estimated Returns</small>
            <h2>
              ₹{" "}
              {wealthGained.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}
            </h2>
          </div>

          <div className="summary-item">
            <small>Maturity Value</small>
            <h1>
              ₹{" "}
              {maturityValue.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Full Width Table */}
      <GrowthTable
        monthlyInvestment={monthlyInvestment}
        annualReturn={annualReturn}
        years={years}
      />
    </div>
  );
}

export default SIPCalculator;