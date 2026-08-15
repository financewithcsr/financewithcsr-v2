function PersonalLoanFAQ() {
  const faqs = [
    {
      question: "What is a Personal Loan EMI?",
      answer:
        "A Personal Loan EMI is the fixed monthly payment made towards repaying a personal loan. It generally consists of both principal and interest.",
    },
    {
      question: "How is Personal Loan EMI calculated?",
      answer:
        "Personal Loan EMI is calculated using the loan amount, interest rate and loan tenure. This calculator uses the standard reducing-balance EMI formula.",
    },
    {
      question: "Does a longer tenure reduce the EMI?",
      answer:
        "Yes. A longer tenure generally reduces the monthly EMI, but it can increase the total interest paid over the entire loan period.",
    },
    {
      question: "How can I reduce the total interest on a Personal Loan?",
      answer:
        "You can consider choosing an appropriate tenure, comparing interest rates and making eligible part-prepayments when financially suitable.",
    },
    {
      question: "Can I make a prepayment on my Personal Loan?",
      answer:
        "Prepayment availability and charges depend on the lender and loan terms. Check your lender's conditions before making a prepayment.",
    },
    {
      question: "Does this calculator include processing fees?",
      answer:
        "No. This calculator estimates EMI, interest and total repayment based on the loan amount, interest rate and tenure. Processing fees and other lender-specific charges are not included.",
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
        Frequently Asked Questions About Personal Loans
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "25px",
          lineHeight: 1.6,
        }}
      >
        Common questions about Personal Loan EMI,
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

export default PersonalLoanFAQ;