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
  initialValue,
  finalValue,
  years,
}) {
  const data = [];

  const cagr =
    initialValue > 0 && years > 0
      ? Math.pow(
          finalValue / initialValue,
          1 / years
        ) - 1
      : 0;

  for (let year = 0; year <= years; year++) {
    const value =
      initialValue *
      Math.pow(1 + cagr, year);

    data.push({
      year,
      initial: Math.round(initialValue),
      value: Math.round(value),
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
        boxShadow:
          "0 8px 24px rgba(15, 23, 42, 0.06)",
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
        CAGR Growth Over Time
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
            tickFormatter={(year) =>
              `Year ${year}`
            }
          />

          <YAxis
            tickFormatter={formatYAxis}
            width={65}
          />

          <Tooltip
            formatter={(value, name) => [
              formatCurrency(value),
              name === "value"
                ? "Investment Value"
                : "Initial Investment",
            ]}
            labelFormatter={(year) =>
              `Year ${year}`
            }
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="initial"
            name="Initial Investment"
            stroke="#94A3B8"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="value"
            name="Investment Value"
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