import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";

import InputSlider from "../ui/InputSlider";

function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const monthlyRate = interestRate / 12 / 100;

  const maturityValue =
    monthlyRate === 0
      ? monthlyDeposit * months
      : monthlyDeposit *
        (((Math.pow(1 + monthlyRate, months) - 1) /
          monthlyRate) *
          (1 + monthlyRate));

  const investedAmount = monthlyDeposit * months;
  const returns = maturityValue - investedAmount;

  return (
    <CalculatorLayout
      title="RD Calculator"
      description="Calculate the maturity amount of your Recurring Deposit."

      left={
        <>
          <InputSlider
            label="Monthly Deposit"
            value={monthlyDeposit}
            setValue={setMonthlyDeposit}
            min={500}
            max={100000}
            step={500}
            prefix="₹ "
          />

          <InputSlider
            label="Interest Rate"
            value={interestRate}
            setValue={setInterestRate}
            min={1}
            max={12}
            step={0.1}
            suffix="%"
          />

          <InputSlider
            label="Investment Period"
            value={years}
            setValue={setYears}
            min={1}
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

export default RDCalculator;