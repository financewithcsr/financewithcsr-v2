import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";

import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";
import PPFBenefits from "./PPFBenefits";
import PPFFAQ from "./PPFFAQ";
import RelatedCalculators from "../common/RelatedCalculators";
import FinanceInsight from "../calculator/FinanceInsight";
import CTA from "../common/CTA";

function PPFCalculator() {
  const [yearlyInvestment, setYearlyInvestment] =
    useState(150000);

  const [interestRate, setInterestRate] =
    useState(7.1);

  const [years, setYears] =
    useState(15);

  /* =========================
     PPF CALCULATION
  ========================= */

  const investedAmount =
    yearlyInvestment * years;

  let maturityValue = 0;

  for (let i = 0; i < years; i++) {
    maturityValue =
      (maturityValue + yearlyInvestment) *
      (1 + interestRate / 100);
  }

  const returns =
    maturityValue - investedAmount;

  return (
    <CalculatorLayout
      title="PPF Calculator"
      description="Calculate your Public Provident Fund maturity amount, total investment and interest earned."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Yearly Investment"
            value={yearlyInvestment}
            setValue={setYearlyInvestment}
            min={500}
            max={150000}
            step={1}
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
         GROWTH + INFORMATION
      ========================= */

      table={
        <>
          <GrowthChart
            investment={yearlyInvestment}
            annualReturn={interestRate}
            years={years}
          />

          <GrowthTable
            investment={yearlyInvestment}
            annualReturn={interestRate}
            years={years}
          />

          <FinanceInsight
            yearlyInvestment={yearlyInvestment}
            annualReturn={interestRate}
            years={years}
          />

          <PPFBenefits />

          <PPFFAQ />

          <RelatedCalculators />

          <CTA />
        </>
      }
    />
  );
}

export default PPFCalculator;