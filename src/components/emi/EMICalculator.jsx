import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

function EMICalculator({
  title = "EMI Calculator",
  description = "Calculate your monthly EMI, total interest and total repayment.",
  defaultLoanAmount = 1000000,
  defaultInterestRate = 9,
  defaultYears = 20,
}) {
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount);
  const [interestRate, setInterestRate] = useState(defaultInterestRate);
  const [years, setYears] = useState(defaultYears);

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
      title={title}
      description={description}
      left={
        <>
          <InputSlider
            label="Loan Amount"
            value={loanAmount}
            setValue={setLoanAmount}
            min={10000}
            max={100000000}
            step={10000}
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
    />
  );
}

export default EMICalculator;