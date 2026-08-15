import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(20);
  const [stepUp, setStepUp] = useState(0);

  /* =========================
     STEP-UP SIP CALCULATION
  ========================= */

  const monthlyRate = annualReturn / 12 / 100;

  let investedAmount = 0;
  let maturityValue = 0;

  for (let year = 1; year <= years; year++) {
    const yearlyMonthlyInvestment =
      monthlyInvestment *
      Math.pow(1 + stepUp / 100, year - 1);

    for (let month = 1; month <= 12; month++) {
      investedAmount += yearlyMonthlyInvestment;

      if (monthlyRate === 0) {
        maturityValue += yearlyMonthlyInvestment;
      } else {
        maturityValue =
          (maturityValue + yearlyMonthlyInvestment) *
          (1 + monthlyRate);
      }
    }
  }

  const returns = maturityValue - investedAmount;

  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="Calculate your SIP returns with regular or annual step-up investments."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Monthly Investment"
            value={monthlyInvestment}
            setValue={setMonthlyInvestment}
            min={10}
            max={500000}
            step={1}
            prefix="₹ "
          />

          <InputSlider
            label="Expected Return"
            value={annualReturn}
            setValue={setAnnualReturn}
            min={1}
            max={30}
            step={0.1}
            suffix="%"
          />

          <InputSlider
            label="Investment Period"
            value={years}
            setValue={setYears}
            min={1}
            max={40}
            step={1}
            suffix=" Years"
          />

          <InputSlider
            label="Annual Step-Up"
            value={stepUp}
            setValue={setStepUp}
            min={0}
            max={50}
            step={1}
            suffix="%"
          />
        </>
      }

      /* =========================
         RESULTS
      ========================= */

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

      /* =========================
         GROWTH CHART + TABLE
      ========================= */

      table={
        <>
          <GrowthChart
            monthlyInvestment={monthlyInvestment}
            annualReturn={annualReturn}
            years={years}
            stepUp={stepUp}
          />

          <GrowthTable
            monthlyInvestment={monthlyInvestment}
            annualReturn={annualReturn}
            years={years}
            stepUp={stepUp}
          />
        </>
      }
    />
  );
}

export default SIPCalculator;