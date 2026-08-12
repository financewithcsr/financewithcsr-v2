import "./QuickStats.css";

function QuickStats({
  monthlyInvestment,
  annualReturn,
  years,
  investedAmount,
}) {
  const stats = [
    {
      icon: "💰",
      label: "Monthly SIP",
      value: `₹ ${monthlyInvestment.toLocaleString("en-IN")}`,
    },
    {
      icon: "📅",
      label: "Total Months",
      value: years * 12,
    },
    {
      icon: "🏦",
      label: "Annual Investment",
      value: `₹ ${(monthlyInvestment * 12).toLocaleString("en-IN")}`,
    },
    {
      icon: "📈",
      label: "Expected Return",
      value: `${annualReturn}%`,
    },
    {
      icon: "🎯",
      label: "Total Investment",
      value: `₹ ${Math.round(investedAmount).toLocaleString("en-IN")}`,
    },
  ];

  return (
    <section className="quick-stats">
      <h2>📊 Quick Statistics</h2>

      {stats.map((item, index) => (
        <div className="quick-row" key={index}>
          <span>
            {item.icon} {item.label}
          </span>

          <strong>{item.value}</strong>
        </div>
      ))}
    </section>
  );
}

export default QuickStats;