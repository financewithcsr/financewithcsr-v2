function CarLoanFAQ() {
  const faqs = [
    {
      question: "What is a Car Loan EMI?",
      answer:
        "A Car Loan EMI is the fixed monthly payment made towards repaying a car loan. It generally consists of both principal and interest.",
    },
    {
      question: "How is Car Loan EMI calculated?",
      answer:
        "Car Loan EMI is calculated using the loan amount, interest rate and loan tenure. This calculator uses the standard reducing-balance EMI formula.",
    },
    {
      question: "Does a longer car loan tenure reduce the EMI?",
      answer:
        "Yes. A longer tenure generally reduces your monthly EMI, but it can increase the total interest paid over the entire loan period.",
    },
    {
      question: "Should I make a larger down payment?",
      answer:
        "A larger down payment can reduce the amount you need to borrow and therefore reduce your EMI and total interest. However, keep enough cash available for your other financial needs.",
    },
    {
      question: "Can I reduce my car loan interest through prepayment?",
      answer:
        "Eligible part-prepayments can reduce your outstanding principal and may reduce the total interest payable. Check your lender's prepayment conditions and charges before making a decision.",
    },
    {
      question: "Does this calculator include car purchase expenses?",
      answer:
        "No. The calculator estimates the loan EMI, interest and repayment based on the loan amount, interest rate and tenure entered. Registration, insurance, processing fees and other vehicle expenses are not included.",
    },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "30px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          margin: "0 0 10px",
          color: "#0F172A",
          fontSize: "28px",
        }}
      >
        Frequently Asked Questions About Car Loans
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "25px",
          lineHeight: 1.6,
        }}
      >
        Common questions about Car Loan EMI,
        interest rates, tenure and repayment.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {faqs.map((faq, index) => (
          <details
            key={index}
            style={{
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              padding: "16px 18px",
              background: "#F8FAFC",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                color: "#0F172A",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              {faq.question}
            </summary>

            <p
              style={{
                margin: "14px 0 0",
                color: "#64748B",
                lineHeight: 1.7,
                fontSize: "14px",
              }}
            >
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default CarLoanFAQ;