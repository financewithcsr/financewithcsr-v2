function CarLoanBenefits() {
  const benefits = [
    {
      icon: "🚗",
      title: "Plan Your Car Purchase",
      text: "Estimate your monthly EMI before buying a car and check whether the repayment fits comfortably within your budget.",
    },
    {
      icon: "💰",
      title: "Understand Total Interest",
      text: "See how much interest you may pay over the complete car loan tenure in addition to the principal amount.",
    },
    {
      icon: "📊",
      title: "Compare Loan Options",
      text: "Change the loan amount, interest rate and tenure to compare different car loan repayment scenarios.",
    },
    {
      icon: "⏳",
      title: "Choose the Right Tenure",
      text: "A longer tenure can reduce your monthly EMI, while a shorter tenure can help reduce the overall interest cost.",
    },
    {
      icon: "🏦",
      title: "Plan Your Down Payment",
      text: "Use the calculator to understand how your loan amount affects your EMI and plan your upfront contribution accordingly.",
    },
    {
      icon: "🎯",
      title: "Plan Prepayments",
      text: "Understanding your outstanding loan balance can help you plan eligible part-prepayments and reduce your interest burden.",
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
        Benefits of Using a Car Loan Calculator
      </h2>

      <p
        style={{
          color: "#64748B",
          marginBottom: "25px",
          lineHeight: 1.6,
        }}
      >
        A Car Loan Calculator helps you understand
        your monthly repayment and the overall cost
        of financing your car.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2, minmax(0, 1fr))",
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

export default CarLoanBenefits;