import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(20);

  const months = years * 12;
  const monthlyRate = annualReturn / 12 / 100;

  const investedAmount = monthlyInvestment * months;

  const maturityValue =
    monthlyRate === 0
      ? investedAmount
      : monthlyInvestment *
        (((Math.pow(1 + monthlyRate, months) - 1) /
          monthlyRate) *
          (1 + monthlyRate));

  const returns = maturityValue - investedAmount;

  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="Calculate your SIP investment returns instantly."

      left={
        <>
          <InputSlider
            label="Monthly Investment"
            value={monthlyInvestment}
            setValue={setMonthlyInvestment}
            min={500}
            max={500000}
            step={500}
            prefix="₹ "
          />

          <InputSlider
            label="Expected Return"
            value={annualReturn}
            setValue={setAnnualReturn}
            min={1}
            max={30}
            step={0.5}
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

      table={
        <GrowthChart
          monthlyInvestment={monthlyInvestment}
          annualReturn={annualReturn}
          years={years}
        />
      }
    />
  );
}

export default SIPCalculator;