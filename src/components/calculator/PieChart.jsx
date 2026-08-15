import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

function InvestmentPieChart({
  investedAmount,
  returns,
  title = "Investment Breakdown",
  investedLabel = "Invested Amount",
  returnsLabel = "Estimated Returns",
}) {
  const data = [
    {
      name: investedLabel,
      value: Math.max(0, investedAmount),
    },
    {
      name: returnsLabel,
      value: Math.max(0, returns),
    },
  ];

  const formatCurrency = (value) => {
    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "20px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          textAlign: "center",
          color: "#0F172A",
        }}
      >
        {title}
      </h3>

      <ResponsiveContainer
        width="100%"
        height={230}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={3}
          >
            <Cell fill="#2563EB" />
            <Cell fill="#16A34A" />
          </Pie>

          <Tooltip
            formatter={(value) =>
              formatCurrency(value)
            }
          />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default InvestmentPieChart;