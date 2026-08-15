import EMICalculator from "../emi/EMICalculator";

import CarLoanBenefits from "./CarLoanBenefits";
import CarLoanFAQ from "./CarLoanFAQ";
import RelatedCalculators from "./RelatedCalculators";

function CarLoanCalculator() {
  return (
    <EMICalculator
      title="Car Loan Calculator"
      description="Calculate your Car Loan EMI, total interest and total repayment."
      defaultLoanAmount={800000}
      defaultInterestRate={9}
      defaultYears={7}
      benefits={<CarLoanBenefits />}
      faq={<CarLoanFAQ />}
      related={<RelatedCalculators />}
    />
  );
}

export default CarLoanCalculator;