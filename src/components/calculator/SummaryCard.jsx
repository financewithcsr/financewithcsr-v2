function SummaryCard({
  investedAmount,
  returns,
  totalValue,

  title = "Investment Summary",

  investedLabel = "Invested Amount",
  returnsLabel = "Estimated Returns",
  totalLabel = "Total Value",
}) {
  const formatCurrency = (value) => {
    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "25px",
        marginTop: "16px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          margin: "0 0 20px",
          color: "#0F172A",
          fontSize: "20px",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          paddingBottom: "14px",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <span>{investedLabel}</span>

        <strong>
          {formatCurrency(investedAmount)}
        </strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          padding: "14px 0",
          borderBottom: "1px solid #E2E8F0",
        }}
      >
        <span>{returnsLabel}</span>

        <strong
          style={{
            color: "#16A34A",
          }}
        >
          {formatCurrency(returns)}
        </strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          paddingTop: "16px",
        }}
      >
        <strong>{totalLabel}</strong>

        <strong
          style={{
            color: "#2563EB",
            fontSize: "18px",
          }}
        >
          {formatCurrency(totalValue)}
        </strong>
      </div>
    </div>
  );
}

export default SummaryCard;