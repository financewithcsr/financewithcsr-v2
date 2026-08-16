function HRAFAQ() {
  const faqs = [
    {
      question: "What is HRA exemption?",
      answer:
        "HRA exemption is the portion of House Rent Allowance that may be excluded from taxable salary when the applicable conditions are satisfied.",
    },
    {
      question: "How is HRA exemption calculated?",
      answer:
        "For eligible taxpayers, the exemption is generally the least of: actual HRA received, rent paid minus 10% of salary plus eligible DA, and 50% of salary plus DA for specified metro cities or 40% for other locations.",
    },
    {
      question: "Can I claim HRA exemption if I live in a rented house?",
      answer:
        "Yes, HRA exemption may be available when you receive HRA and actually pay rent for the accommodation, subject to the applicable conditions.",
    },
    {
      question: "Is HRA exemption available under the New Tax Regime?",
      answer:
        "The Section 10(13A) HRA exemption is generally associated with the Old Tax Regime. The New Tax Regime does not allow this HRA exemption for salaried taxpayers.",
    },
    {
      question: "What happens if my rent is less than my HRA?",
      answer:
        "The exemption is not automatically equal to the HRA received. The applicable least-of-three calculation determines the maximum eligible exemption, so any remaining HRA can be taxable.",
    },
    {
      question: "What if I live in Hyderabad?",
      answer:
        "For HRA purposes, the metro-city 50% limit applies only to the specified metro cities under the applicable tax rules. Hyderabad is generally treated under the 40% category for this calculation.",
    },
    {
      question: "Can I claim HRA if I pay rent to my parents?",
      answer:
        "Rent paid to parents can potentially qualify if it represents a genuine rental arrangement and the applicable conditions and documentation requirements are satisfied.",
    },
    {
      question: "Can I claim HRA without receiving HRA from my employer?",
      answer:
        "The Section 10(13A) HRA exemption specifically applies where HRA is received as part of salary. If you do not receive HRA, a different deduction under the applicable provisions may be relevant instead.",
    },
    {
      question: "Do I need rent receipts for claiming HRA?",
      answer:
        "Rent receipts and supporting records can be important for substantiating the HRA claim. Keep appropriate rent-payment and tenancy documentation as applicable.",
    },
    {
      question: "Is the HRA amount shown by this calculator my final exemption?",
      answer:
        "No. This calculator provides an estimate based on the information entered. Your actual exemption can depend on your salary structure, eligible DA, rent paid, location, employer records and other applicable conditions.",
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
          HRA Calculator FAQs
        </h2>

        <p
          style={{
            margin: "10px auto 0",
            maxWidth: "700px",
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          Common questions about HRA exemption,
          rent, metro cities and tax treatment.
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
        HRA rules and tax provisions can change.
        Verify your final claim against the
        applicable assessment year rules and your
        actual salary and rent records.
      </div>
    </section>
  );
}

export default HRAFAQ;