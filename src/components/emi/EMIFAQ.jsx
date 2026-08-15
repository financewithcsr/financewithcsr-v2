function EMIFAQ() {
  const faqs = [
    {
      question: "What is EMI?",
      answer:
        "EMI stands for Equated Monthly Instalment. It is the fixed amount you pay every month towards repaying a loan. Your EMI generally includes both principal and interest.",
    },
    {
      question: "How is EMI calculated?",
      answer:
        "EMI is calculated using the loan amount, interest rate and loan tenure. The calculator uses the standard reducing-balance EMI formula to estimate your monthly repayment.",
    },
    {
      question: "Does a longer loan tenure reduce EMI?",
      answer:
        "Yes. A longer tenure generally reduces the monthly EMI, but you may pay more total interest over the entire loan period.",
    },
    {
      question: "What happens if the interest rate increases?",
      answer:
        "If the interest rate increases, your EMI may increase or your loan may take longer to repay, depending on the terms of your loan.",
    },
    {
      question: "Can I reduce my total interest by making prepayments?",
      answer:
        "Yes. Making eligible part-prepayments can reduce your outstanding principal and may reduce the total interest payable. Check your lender's prepayment terms before making a payment.",
    },
    {
      question: "Does the EMI calculator show the exact EMI charged by a bank?",
      answer:
        "The calculator provides an estimate based on the loan amount, interest rate and tenure entered. The actual EMI may differ because of lender-specific terms, fees, rate changes or other charges.",
    },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          margin: "0 0 10px",
          color: "#0F172A",
          fontSize: "28px",
        }}
      >
        Frequently Asked Questions About EMI
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "25px",
          lineHeight: 1.6,
        }}
      >
        Common questions about EMI, loan tenure,
        interest and repayment.
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

export default EMIFAQ;