import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";

import InputSlider from "../ui/InputSlider";

function PPFCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(150000);
  const [interestRate, setInterestRate] = useState(7.1);
  const [years, setYears] = useState(15);

  let maturityValue = 0;

  for (let i = 0; i < years; i++) {
    maturityValue =
      (maturityValue + yearlyInvestment) *
      (1 + interestRate / 100);
  }

  const investedAmount = yearlyInvestment * years;
  const returns = maturityValue - investedAmount;

  return (
    <CalculatorLayout
      title="PPF Calculator"
      description="Estimate the maturity value of your Public Provident Fund investment."

      left={
        <>
          <InputSlider
            label="Yearly Investment"
            value={yearlyInvestment}
            setValue={setYearlyInvestment}
            min={500}
            max={150000}
            step={500}
            prefix="₹ "
          />

          <InputSlider
            label="Interest Rate"
            value={interestRate}
            setValue={setInterestRate}
            min={1}
            max={10}
            step={0.1}
            suffix="%"
          />

          <InputSlider
            label="Investment Period"
            value={years}
            setValue={setYears}
            min={15}
            max={30}
            suffix=" Years"
          />
        </>
      }

      right={
        <>
          <InvestmentPieChart
            investedAmount={investedAmount}
            returns={returns}
          />

          <SummaryCard
            investedAmount={investedAmount}
            returns={returns}
            totalValue={maturityValue}
          />
        </>
      }
    />
  );
}

export default PPFCalculator;