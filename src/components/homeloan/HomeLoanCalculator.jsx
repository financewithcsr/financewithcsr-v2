import EMICalculator from "../emi/EMICalculator";

function HomeLoanCalculator() {
  return (
    <EMICalculator
      title="Home Loan Calculator"
      description="Calculate your Home Loan EMI, total interest and repayment."
      defaultLoanAmount={3000000}
      defaultInterestRate={8.5}
      defaultYears={20}
    />
  );
}

export default HomeLoanCalculator;