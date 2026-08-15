import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";
import RDBenefits from "./RDBenefits";
import RDFAQ from "./RDFAQ";
import RelatedCalculators from "./RelatedCalculators";

function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(5);

  /* =========================
     RD CALCULATION
  ========================= */

  const months = years * 12;

  const monthlyRate =
    interestRate / 12 / 100;

  const investedAmount =
    monthlyDeposit * months;

  const maturityAmount =
    monthlyRate === 0
      ? investedAmount
      : monthlyDeposit *
        (
          (Math.pow(1 + monthlyRate, months) - 1) /
          monthlyRate
        ) *
        (1 + monthlyRate);

  const interestEarned =
    maturityAmount - investedAmount;

  return (
    <CalculatorLayout
      title="RD Calculator"
      description="Calculate your Recurring Deposit maturity amount, total interest earned, and total investment."

      /* =========================
         INPUTS
      ========================= */

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
            max={15}
            step={0.1}
            suffix="%"
          />

          <InputSlider
            label="RD Tenure"
            value={years}
            setValue={setYears}
            min={1}
            max={10}
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
            investedAmount={investedAmount}
            returns={interestEarned}
          />

          <SummaryCard
            investedAmount={investedAmount}
            returns={interestEarned}
            totalValue={maturityAmount}
          />
        </>
      }

      /* =========================
         GROWTH CHART + TABLE
      ========================= */

      table={
        <>
          <GrowthChart
            monthlyDeposit={monthlyDeposit}
            interestRate={interestRate}
            years={years}
          />

          <GrowthTable
            monthlyDeposit={monthlyDeposit}
            interestRate={interestRate}
            years={years}
          />

          <RDBenefits />

          <RDFAQ />

          <RelatedCalculators />
        </>
      }
    />
  );
}

export default RDCalculator;