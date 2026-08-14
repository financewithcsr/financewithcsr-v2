import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";

import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";
import HomeLoanBenefits from "./HomeLoanBenefits";
import HomeLoanFAQ from "./HomeLoanFAQ";
import RelatedCalculators from "./RelatedCalculators";

function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const monthlyRate = interestRate / 12 / 100;
  const months = years * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  return (
    <CalculatorLayout
      title="Home Loan Calculator"
      description="Calculate your Home Loan EMI, total interest payable, and total repayment amount."

      left={
        <>
          <InputSlider
            label="Loan Amount"
            value={loanAmount}
            setValue={setLoanAmount}
            min={100000}
            max={50000000}
            step={50000}
            prefix="₹ "
          />

          <InputSlider
            label="Interest Rate"
            value={interestRate}
            setValue={setInterestRate}
            min={1}
            max={20}
            step={0.1}
            suffix="%"
          />

          <InputSlider
            label="Loan Tenure"
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
            investedAmount={loanAmount}
            returns={totalInterest}
          />

          <SummaryCard
            investedAmount={loanAmount}
            returns={totalInterest}
            totalValue={totalPayment}
          />

          <div
            style={{
              marginTop: "20px",
              background: "#fff",
              borderRadius: "18px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            }}
          >
            <h3>Monthly EMI</h3>

            <h1
              style={{
                color: "#2563EB",
                marginTop: "10px",
              }}
            >
              ₹ {Math.round(emi).toLocaleString("en-IN")}
            </h1>
          </div>
        </>
      }

      table={
        <>
          <GrowthChart
            investment={loanAmount}
            annualReturn={interestRate}
            years={years}
          />

          <GrowthTable
            investment={loanAmount}
            annualReturn={interestRate}
            years={years}
          />

          <HomeLoanBenefits />

          <HomeLoanFAQ />

          <RelatedCalculators />
        </>
      }
    />
  );
}

export default HomeLoanCalculator;