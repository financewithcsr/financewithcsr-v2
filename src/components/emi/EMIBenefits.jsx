function EMIBenefits() {
  const benefits = [
    {
      icon: "💰",
      title: "Plan Your Monthly Budget",
      text: "Know your EMI in advance and understand how much of your monthly income will go towards loan repayment.",
    },
    {
      icon: "📊",
      title: "Understand Total Interest",
      text: "See how much interest you will pay over the entire loan tenure, not just the monthly EMI.",
    },
    {
      icon: "🏦",
      title: "Compare Loan Options",
      text: "Change the loan amount, interest rate and tenure to compare different borrowing scenarios.",
    },
    {
      icon: "⏳",
      title: "Choose the Right Tenure",
      text: "A longer tenure can reduce your EMI but may increase the total interest paid over the loan period.",
    },
    {
      icon: "💡",
      title: "Make Better Decisions",
      text: "Use the calculator before taking a loan to understand the actual cost of borrowing.",
    },
    {
      icon: "🎯",
      title: "Plan Prepayments",
      text: "Understanding your outstanding balance can help you plan future loan prepayments more effectively.",
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
        Benefits of Using an EMI Calculator
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "25px",
          lineHeight: 1.6,
        }}
      >
        An EMI calculator helps you understand your
        loan repayment before you commit to a loan.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "18px",
        }}
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              background: "#F8FAFC",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                marginBottom: "10px",
              }}
            >
              {benefit.icon}
            </div>

            <h3
              style={{
                margin: "0 0 8px",
                color: "#0F172A",
                fontSize: "17px",
              }}
            >
              {benefit.title}
            </h3>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                lineHeight: 1.6,
                fontSize: "14px",
              }}
            >
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EMIBenefits;