import EMICalculator from "../emi/EMICalculator";

function PersonalLoanCalculator() {
  return (
    <EMICalculator
      title="Personal Loan Calculator"
      description="Calculate your Personal Loan EMI, interest and repayment."
      defaultLoanAmount={500000}
      defaultInterestRate={12}
      defaultYears={5}
    />
  );
}

export default PersonalLoanCalculator;