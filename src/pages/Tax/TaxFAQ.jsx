function TaxFAQ() {
  const faqs = [
    {
      question: "Which tax regime is the default regime?",
      answer:
        "The New Tax Regime is the default regime for eligible individual taxpayers. However, eligible taxpayers can choose the Old Tax Regime subject to the applicable rules.",
    },
    {
      question: "Is the Old Tax Regime still available?",
      answer:
        "Yes. The Old Tax Regime continues to be available for eligible taxpayers. It can be useful for taxpayers who have substantial eligible deductions and exemptions.",
    },
    {
      question: "What is the standard deduction under the New Tax Regime?",
      answer:
        "For salaried taxpayers, the standard deduction applicable under the current New Tax Regime is ₹75,000.",
    },
    {
      question: "Why can a salaried person earning ₹12.75 lakh have zero tax?",
      answer:
        "Under the New Tax Regime, a salaried taxpayer can benefit from the ₹75,000 standard deduction. This can bring ₹12.75 lakh of salary down to ₹12 lakh of taxable income, where the applicable rebate can eliminate the tax liability, subject to the applicable conditions.",
    },
    {
      question: "What is marginal relief?",
      answer:
        "Marginal relief is intended to reduce the sudden increase in tax for taxpayers whose income is only slightly above an applicable rebate threshold. It can be relevant when taxable income is marginally above ₹12 lakh under the New Tax Regime.",
    },
    {
      question: "Does the calculator cover every type of income?",
      answer:
        "No. This calculator is designed primarily for normal income calculations. Certain types of income, such as income taxable at special rates, may require separate calculations.",
    },
    {
      question: "Should I always choose the New Tax Regime?",
      answer:
        "Not necessarily. The better regime depends on your income, deductions, exemptions and other applicable circumstances. Comparing both regimes is generally more useful than assuming one regime is always better.",
    },
    {
      question: "Is the tax shown by this calculator my final tax liability?",
      answer:
        "No. The calculator provides an estimate for financial planning. Your actual tax liability can depend on your complete income details, deductions, exemptions, special-rate income, TDS and other applicable provisions.",
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
          Tax Calculator FAQs
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Common questions about income tax,
          tax regimes and tax calculation.
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
        Tax rules can change. Always verify your
        final tax liability against the latest
        applicable provisions and your actual
        financial records.
      </div>
    </section>
  );
}

export default TaxFAQ;