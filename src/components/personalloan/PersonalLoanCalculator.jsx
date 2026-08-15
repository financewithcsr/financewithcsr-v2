import EMICalculator from "../emi/EMICalculator";

import PersonalLoanBenefits from "./PersonalLoanBenefits";
import PersonalLoanFAQ from "./PersonalLoanFAQ";
import RelatedCalculators from "./RelatedCalculators";

function PersonalLoanCalculator() {
  return (
    <EMICalculator
      title="Personal Loan Calculator"
      description="Calculate your Personal Loan EMI, total interest and total repayment."
      defaultLoanAmount={500000}
      defaultInterestRate={12}
      defaultYears={5}
      benefits={<PersonalLoanBenefits />}
      faq={<PersonalLoanFAQ />}
      related={<RelatedCalculators />}
    />
  );
}

export default PersonalLoanCalculator;