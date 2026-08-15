import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function GrowthChart({
  investment,
  annualReturn,
  years,
}) {
  const data = [];

  let totalValue = 0;

  for (let year = 1; year <= years; year++) {
    totalValue =
      (totalValue + investment) *
      (1 + annualReturn / 100);

    const investedAmount =
      investment * year;

    data.push({
      year,
      invested: Math.round(investedAmount),
      value: Math.round(totalValue),
    });
  }

  const formatYAxis = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }

    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`;
    }

    return `₹${value}`;
  };

  const formatCurrency = (value) => {
    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#ffffff",
        border: "1px solid #E2E8F0",
        borderRadius: "20px",
        padding: "28px",
        boxSizing: "border-box",
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
      }}
    >
      <h2
        style={{
          margin: "0 0 20px",
          textAlign: "center",
          fontSize: "26px",
          color: "#0F172A",
        }}
      >
        PPF Investment Growth
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="year"
            tickFormatter={(year) => `${year}`}
          />

          <YAxis
            tickFormatter={formatYAxis}
            width={65}
          />

          <Tooltip
            formatter={(value, name) => [
              formatCurrency(value),
              name === "value"
                ? "Maturity Value"
                : "Invested Amount",
            ]}
            labelFormatter={(year) =>
              `Year ${year}`
            }
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="invested"
            name="Invested Amount"
            stroke="#94A3B8"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="value"
            name="Maturity Value"
            stroke="#2563EB"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;