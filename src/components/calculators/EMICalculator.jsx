import { useState } from "react";
import InputSlider from "../ui/InputSlider";

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(9);
  const [loanTenure, setLoanTenure] = useState(20);

  const monthlyRate = interestRate / 12 / 100;
  const months = loanTenure * 12;

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
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "30px",
      }}
    >
      <div className="sip-card">
        <h1>EMI Calculator</h1>

        <p>Calculate your monthly EMI instantly.</p>

        <InputSlider
          label="Loan Amount"
          value={loanAmount}
          setValue={setLoanAmount}
          min={50000}
          max={10000000}
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
          value={loanTenure}
          setValue={setLoanTenure}
          min={1}
          max={30}
          suffix=" Years"
        />
      </div>

      <div className="summary-card">
        <h2>Loan Summary</h2>

        <div className="summary-item">
          <small>Monthly EMI</small>
          <h1>
            ₹{" "}
            {emi.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}
          </h1>
        </div>

        <div className="summary-item">
          <small>Total Interest</small>
          <h2>
            ₹{" "}
            {totalInterest.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}
          </h2>
        </div>

        <div className="summary-item">
          <small>Total Payment</small>
          <h2>
            ₹{" "}
            {totalPayment.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
            })}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;