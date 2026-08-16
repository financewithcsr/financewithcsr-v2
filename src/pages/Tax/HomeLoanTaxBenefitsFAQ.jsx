function HomeLoanTaxBenefitsFAQ() {
  const faqs = [
    {
      question: "Can I claim tax benefits on my home loan?",
      answer:
        "Eligible taxpayers may be able to claim deductions on qualifying home-loan principal repayment and interest payments under the applicable provisions, subject to the conditions of the property and loan.",
    },
    {
      question: "How much home-loan principal can qualify under Section 80C?",
      answer:
        "Eligible home-loan principal repayment can form part of the combined ₹1,50,000 limit under Section 80C, 80CCC and 80CCD(1), subject to the applicable conditions.",
    },
    {
      question: "How much home-loan interest can I claim under Section 24(b)?",
      answer:
        "For a qualifying self-occupied property under the Old Tax Regime, the interest deduction can generally be up to ₹2,00,000, subject to the applicable conditions.",
    },
    {
      question: "Can I claim both principal and interest deductions?",
      answer:
        "Yes. Where the applicable conditions are satisfied, eligible principal repayment and interest payment can qualify under their respective provisions.",
    },
    {
      question: "Are home-loan tax benefits available under the New Tax Regime?",
      answer:
        "The deductions covered by this calculator are primarily relevant to the Old Tax Regime. The availability and treatment of home-loan deductions under the New Tax Regime can differ depending on the property and applicable provision.",
    },
    {
      question: "Does the ₹1.5 lakh 80C limit apply only to my home loan?",
      answer:
        "No. The ₹1,50,000 limit is a combined limit. Other eligible 80C investments and payments, such as EPF, PPF, ELSS and certain insurance premiums, can also use the same overall limit.",
    },
    {
      question: "What if my home-loan interest is more than ₹2 lakh?",
      answer:
        "For a qualifying self-occupied property under the applicable conditions, the deduction shown under Section 24(b) is generally capped at ₹2,00,000. The treatment can differ for let-out properties and other circumstances.",
    },
    {
      question: "Does this calculator work for a let-out property?",
      answer:
        "The calculator is primarily designed around the common self-occupied property case. Let-out property calculations can involve different rules and should be evaluated separately.",
    },
    {
      question: "Does the date of taking the home loan matter?",
      answer:
        "Yes. Certain home-loan interest deduction rules depend on factors such as when the loan was taken, the purpose of the loan and the completion or possession of the property.",
    },
    {
      question: "Can I claim the deduction before taking possession of the house?",
      answer:
        "The treatment of interest paid before completion or possession can differ from the normal interest deduction. Applicable pre-construction interest rules and conditions need to be considered separately.",
    },
    {
      question: "Does this calculator show my exact tax saving?",
      answer:
        "No. It provides an estimate based on the information entered. Your actual tax benefit depends on your taxable income, applicable tax rate, property status, loan details and other tax provisions.",
    },
  ];

  return (
    <section
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "35px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.06)",
        border: "1px solid #E2E8F0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#0F172A",
            fontSize: "28px",
          }}
        >
          Home Loan Tax Benefits FAQs
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Common questions about home-loan
          principal, interest and tax deductions.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {faqs.map((faq) => (
          <details
            key={faq.question}
            style={{
              background: "#F8FAFC",
              borderRadius: "14px",
              border: "1px solid #E2E8F0",
              padding: "18px 20px",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                color: "#0F172A",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              {faq.question}
            </summary>

            <p
              style={{
                margin: "12px 0 0",
                color: "#64748B",
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div
        style={{
          marginTop: "25px",
          padding: "18px",
          borderRadius: "14px",
          background: "#FFF7ED",
          border: "1px solid #FED7AA",
          color: "#9A3412",
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        <strong>Note:</strong>{" "}
        Home-loan tax treatment can depend on
        property type, possession status, loan
        purpose and the applicable assessment-year
        provisions. Verify your final claim against
        your actual loan and property documents.
      </div>
    </section>
  );
}

export default HomeLoanTaxBenefitsFAQ;