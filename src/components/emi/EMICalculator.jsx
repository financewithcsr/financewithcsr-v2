import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

import GrowthChart from "./GrowthChart";
import GrowthTable from "./GrowthTable";
import EMIBenefits from "./EMIBenefits";
import EMIFAQ from "./EMIFAQ";
import RelatedCalculators from "./RelatedCalculators";

function EMICalculator({
  title = "EMI Calculator",
  description = "Calculate your monthly EMI, total interest and total repayment.",
  defaultLoanAmount = 1000000,
  defaultInterestRate = 9,
  defaultYears = 20,
  benefits = null,
  faq = null,
  related = null,
}) {
  const [loanAmount, setLoanAmount] =
    useState(defaultLoanAmount);

  const [interestRate, setInterestRate] =
    useState(defaultInterestRate);

  const [years, setYears] =
    useState(defaultYears);

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
      title={title}
      description={description}

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

      right={
        <>
          <InvestmentPieChart
            investedAmount={loanAmount}
            returns={totalInterest}
            title={
              title === "EMI Calculator"
                ? "Loan Repayment Breakdown"
                : `${title.replace(
                    " Calculator",
                    ""
                  )} Breakdown`
            }
            investedLabel="Principal Amount"
            returnsLabel="Total Interest"
          />

          <SummaryCard
            investedAmount={loanAmount}
            returns={totalInterest}
            totalValue={totalPayment}
            title={
              title === "EMI Calculator"
                ? "Loan Summary"
                : `${title.replace(
                    " Calculator",
                    ""
                  )} Summary`
            }
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

      benefits={
        benefits || <EMIBenefits />
      }

      faq={
        faq || <EMIFAQ />
      }

      related={
        related || <RelatedCalculators />
      }
    />
  );
}

export default EMICalculator;