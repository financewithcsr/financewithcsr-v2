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
  const [loanAmount, setLoanAmount] =
    useState(3000000);

  const [interestRate, setInterestRate] =
    useState(8.5);

  const [years, setYears] =
    useState(20);

  /* =========================
     HOME LOAN CALCULATION
  ========================= */

  const monthlyRate =
    interestRate / 12 / 100;

  const months =
    years * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (
          loanAmount *
          monthlyRate *
          Math.pow(
            1 + monthlyRate,
            months
          )
        ) /
        (
          Math.pow(
            1 + monthlyRate,
            months
          ) - 1
        );

  const totalPayment =
    emi * months;

  const totalInterest =
    totalPayment - loanAmount;

  return (
    <CalculatorLayout
      title="Home Loan Calculator"
      description="Calculate your Home Loan EMI, total interest payable, and total repayment amount."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Loan Amount"
            value={loanAmount}
            setValue={setLoanAmount}
            min={10}
            max={100000000}
            step={1}
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
            investedAmount={loanAmount}
            returns={totalInterest}
            title="Home Loan Breakdown"
            investedLabel="Principal Amount"
            returnsLabel="Total Interest"
          />

          <SummaryCard
            investedAmount={loanAmount}
            returns={totalInterest}
            totalValue={totalPayment}
            title="Home Loan Summary"
            investedLabel="Loan Amount"
            returnsLabel="Total Interest"
            totalLabel="Total Repayment"
          />

          <div
            style={{
              marginTop: "4px",
              background: "#ffffff",
              borderRadius: "18px",
              padding: "25px",
              textAlign: "center",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#0F172A",
              }}
            >
              Monthly EMI
            </h3>

            <h1
              style={{
                color: "#2563EB",
                marginTop: "10px",
              }}
            >
              ₹{" "}
              {Math.round(emi).toLocaleString(
                "en-IN"
              )}
            </h1>
          </div>
        </>
      }

      /* =========================
         GROWTH CHART + TABLE
      ========================= */

      table={
        <>
          <GrowthChart
            loanAmount={loanAmount}
            interestRate={interestRate}
            years={years}
          />

          <GrowthTable
            loanAmount={loanAmount}
            interestRate={interestRate}
            years={years}
          />
        </>
      }

      /* =========================
         BENEFITS
      ========================= */

      benefits={
        <HomeLoanBenefits />
      }

      /* =========================
         FAQ
      ========================= */

      faq={
        <HomeLoanFAQ />
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

export default HomeLoanCalculator;