import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";

import InputSlider from "../ui/InputSlider";
import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";
import SIPBenefits from "./SIPBenefits";
import SIPFAQ from "./SIPFAQ";
import RelatedCalculators from "./RelatedCalculators";

import FinanceInsight from "../calculator/FinanceInsight";
import CompareSIP from "../calculator/CompareSIP";
import GoalSIP from "../calculator/GoalSIP";

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
  const returns = maturityValue - investedAmount;

  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="Calculate the future value of your monthly SIP investments and understand how compounding helps grow your wealth."
      left={
        <>
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
        </>
      }
      right={
        <>
          <InvestmentPieChart
            investedAmount={investedAmount}
            returns={returns}
          />

          <SummaryCard
            monthlyInvestment={monthlyInvestment}
            annualReturn={annualReturn}
            years={years}
            investedAmount={investedAmount}
            returns={returns}
            totalValue={maturityValue}
          />
        </>
      }
      table={
        <>
          <GrowthChart
            monthlyInvestment={monthlyInvestment}
            annualReturn={annualReturn}
            years={years}
          />

          <GrowthTable
            monthlyInvestment={monthlyInvestment}
            annualReturn={annualReturn}
            years={years}
          />

          <FinanceInsight
            monthlyInvestment={monthlyInvestment}
            annualReturn={annualReturn}
            years={years}
          />

          <CompareSIP
            monthlyInvestment={monthlyInvestment}
            annualReturn={annualReturn}
            years={years}
          />

          <GoalSIP
            annualReturn={annualReturn}
            years={years}
          />

          <SIPBenefits />

          <SIPFAQ />

          <RelatedCalculators />
        </>
      }
    />
  );
}

export default SIPCalculator;