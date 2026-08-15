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
  deposit,
  interestRate,
  years,
}) {
  const data = [];

  for (let year = 1; year <= years; year++) {
    const maturityValue =
      deposit *
      Math.pow(1 + interestRate / 100, year);

    data.push({
      year,
      deposit: Math.round(deposit),
      maturity: Math.round(maturityValue),
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
        FD Investment Growth
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
              name === "maturity"
                ? "Maturity Value"
                : "Deposit Amount",
            ]}
            labelFormatter={(year) =>
              `Year ${year}`
            }
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="deposit"
            name="Deposit Amount"
            stroke="#94A3B8"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="maturity"
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