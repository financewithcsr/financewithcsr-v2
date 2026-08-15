import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";

import LumpsumBenefits from "./LumpsumBenefits";
import LumpsumFAQ from "./LumpsumFAQ";
import RelatedCalculators from "./RelatedCalculators";

function LumpsumCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  /* =========================
     LUMPSUM CALCULATION
  ========================= */

  const totalValue =
    investment *
    Math.pow(1 + annualReturn / 100, years);

  const returns = totalValue - investment;

  return (
    <CalculatorLayout
      title="Lumpsum Calculator"
      description="Calculate the future value and estimated returns on your one-time investment."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Investment Amount"
            value={investment}
            setValue={setInvestment}
            min={10}
            max={50000000}
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
        </>
      }

      /* =========================
         RESULTS
      ========================= */

      right={
        <>
          <InvestmentPieChart
            investedAmount={investment}
            returns={returns}
          />

          <SummaryCard
            investedAmount={investment}
            returns={returns}
            totalValue={totalValue}
          />
        </>
      }

      /* =========================
         GROWTH CHART + TABLE
      ========================= */

      table={
        <>
          <GrowthChart
            investment={investment}
            annualReturn={annualReturn}
            years={years}
          />

          <GrowthTable
            investment={investment}
            annualReturn={annualReturn}
            years={years}
          />
        </>
      }

      /* =========================
         BENEFITS
      ========================= */

      benefits={
        <LumpsumBenefits />
      }

      /* =========================
         FAQ
      ========================= */

      faq={
        <LumpsumFAQ />
      }

      /* =========================
         RELATED CALCULATORS
      ========================= */

      related={
        <RelatedCalculators />
      }
    />
  );
}

export default LumpsumCalculator;