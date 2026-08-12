import EMICalculator from "../emi/EMICalculator";

function CarLoanCalculator() {
  return (
    <EMICalculator
      title="Car Loan Calculator"
      description="Calculate your Car Loan EMI, interest and repayment."
      defaultLoanAmount={800000}
      defaultInterestRate={9}
      defaultYears={7}
    />
  );
}

export default CarLoanCalculator;