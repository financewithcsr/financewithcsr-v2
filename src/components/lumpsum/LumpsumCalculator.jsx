import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";

import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";
import LumpsumBenefits from "./LumpsumBenefits";
import LumpsumFAQ from "./LumpsumFAQ";
import RelatedCalculators from "../common/RelatedCalculators";
import FinanceInsight from "../calculator/FinanceInsight";
import CTA from "../common/CTA";

function LumpsumCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  const maturityValue =
    investment * Math.pow(1 + annualReturn / 100, years);

  const investedAmount = investment;
  const returns = maturityValue - investedAmount;

  return (
    <CalculatorLayout
      title="Lumpsum Calculator"
      description="Calculate the future value of your one-time investment."

      left={
        <>
          <InputSlider
            label="Investment Amount"
            value={investment}
            setValue={setInvestment}
            min={1000}
            max={10000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Expected Annual Return"
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

          <FinanceInsight
            monthlyInvestment={investment}
            annualReturn={annualReturn}
            years={years}
          />

          <LumpsumBenefits />

          <LumpsumFAQ />

          <RelatedCalculators />

          <CTA />
        </>
      }
    />
  );
}

export default LumpsumCalculator;