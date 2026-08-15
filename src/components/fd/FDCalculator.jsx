import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";

function FDCalculator() {
  const [deposit, setDeposit] = useState(100000);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(5);

  /* =========================
     FD CALCULATION
  ========================= */

  const maturityValue =
    deposit *
    Math.pow(1 + interestRate / 100, years);

  const interestEarned =
    maturityValue - deposit;

  return (
    <CalculatorLayout
      title="FD Calculator"
      description="Calculate the maturity value and interest earned on your Fixed Deposit."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Deposit Amount"
            value={deposit}
            setValue={setDeposit}
            min={10}
            max={10000000}
            step={1}
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
            step={1}
            suffix=" Years"
          />
        </>
      }

      /* =========================
         RESULTS
      ========================= */

      right={
        <>
          <InvestmentPieChart
            investedAmount={deposit}
            returns={interestEarned}
          />

          <SummaryCard
            investedAmount={deposit}
            returns={interestEarned}
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
            deposit={deposit}
            interestRate={interestRate}
            years={years}
          />

          <GrowthTable
            deposit={deposit}
            interestRate={interestRate}
            years={years}
          />
        </>
      }
    />
  );
}

export default FDCalculator;