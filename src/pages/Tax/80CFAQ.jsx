function EightyCFAQ() {
  const faqs = [
    {
      question: "What is Section 80C?",
      answer:
        "Section 80C allows eligible individual taxpayers and Hindu Undivided Families to claim deductions for certain specified investments and payments, subject to the applicable conditions and limits.",
    },
    {
      question: "What is the maximum 80C deduction?",
      answer:
        "The combined deduction limit under Section 80C, along with eligible deductions under Sections 80CCC and 80CCD(1), is ₹1,50,000 in a financial year.",
    },
    {
      question: "Which investments qualify under 80C?",
      answer:
        "Common eligible items include EPF, PPF, ELSS, certain life-insurance premiums, NSC, eligible home-loan principal repayment and specified tuition fees, subject to the applicable conditions.",
    },
    {
      question: "Can I claim 80C under the New Tax Regime?",
      answer:
        "Section 80C deductions are generally available under the Old Tax Regime and are not available under the New Tax Regime.",
    },
    {
      question: "If I invest ₹2 lakh in 80C investments, can I claim the full ₹2 lakh?",
      answer:
        "No. The combined eligible deduction is capped at ₹1,50,000, subject to the applicable rules. Any eligible investment above that limit does not create an additional 80C deduction.",
    },
    {
      question: "Does EPF count towards the 80C limit?",
      answer:
        "Eligible employee contributions to recognised provident funds can qualify under the applicable provisions. Your EPF contribution also forms part of the overall combined limit.",
    },
    {
      question: "Does PPF count under 80C?",
      answer:
        "Eligible PPF contributions can qualify for deduction under Section 80C, subject to the applicable conditions and the overall ₹1,50,000 combined limit.",
    },
    {
      question: "Does ELSS qualify for 80C?",
      answer:
        "Eligible investments in specified Equity Linked Savings Schemes can qualify under Section 80C, subject to the applicable conditions and overall limit.",
    },
    {
      question: "Does home-loan principal repayment qualify for 80C?",
      answer:
        "Eligible repayment of the principal portion of a qualifying housing loan can be considered under Section 80C, subject to the applicable conditions.",
    },
    {
      question: "Does 80C directly reduce my tax by ₹1.5 lakh?",
      answer:
        "No. The ₹1.5 lakh is a deduction from taxable income, not a direct tax rebate. The actual tax benefit depends on your taxable income and applicable tax rate.",
    },
    {
      question: "Can I invest in multiple 80C products?",
      answer:
        "Yes. You can have multiple eligible investments and payments. However, the combined eligible deduction remains subject to the applicable overall limit.",
    },
    {
      question: "Is the tax benefit shown by this calculator exact?",
      answer:
        "No. The calculator provides an estimate. Your actual tax benefit depends on your complete taxable income, applicable tax slab, eligible deductions and the specific conditions attached to each investment or payment.",
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
          80C Calculator FAQs
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Common questions about Section 80C,
          eligible investments and tax-saving
          deductions.
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
              border:
                "1px solid #E2E8F0",
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
                margin:
                  "12px 0 0",
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
          border:
            "1px solid #FED7AA",
          color: "#9A3412",
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
        <strong>Note:</strong>{" "}
        Eligibility of individual investments and
        payments can depend on specific conditions.
        Verify your claim against the applicable
        assessment-year rules and your supporting
        documents.
      </div>
    </section>
  );
}

export default EightyCFAQ;