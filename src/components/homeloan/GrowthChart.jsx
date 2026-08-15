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
  loanAmount,
  interestRate,
  years,
}) {
  const data = [];

  const monthlyRate =
    interestRate / 12 / 100;

  const months =
    years * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (
          loanAmount *
          monthlyRate *
          Math.pow(
            1 + monthlyRate,
            months
          )
        ) /
        (
          Math.pow(
            1 + monthlyRate,
            months
          ) - 1
        );

  let balance = loanAmount;
  let totalPaid = 0;

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      const interest =
        balance * monthlyRate;

      const principal =
        emi - interest;

      balance =
        Math.max(
          0,
          balance - principal
        );

      totalPaid += emi;
    }

    data.push({
      year,
      balance: Math.round(balance),
      totalPaid: Math.round(totalPaid),
    });
  }

  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)}Cr`;
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }

    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`;
    }

    return `₹${Math.round(value)}`;
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "18px",
        padding: "25px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          margin: "0 0 20px",
          color: "#0F172A",
        }}
      >
        Home Loan Repayment Growth
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
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
          />

          <XAxis
            dataKey="year"
            tickFormatter={(year) =>
              `Year ${year}`
            }
          />

          <YAxis
            tickFormatter={formatCurrency}
            width={70}
          />

          <Tooltip
            formatter={(value, name) => [
              `₹ ${Number(value).toLocaleString(
                "en-IN"
              )}`,
              name === "balance"
                ? "Remaining Loan"
                : "Total Paid",
            ]}
            labelFormatter={(year) =>
              `Year ${year}`
            }
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#2563EB"
            strokeWidth={4}
            dot={false}
            name="Remaining Loan"
          />

          <Line
            type="monotone"
            dataKey="totalPaid"
            stroke="#94A3B8"
            strokeWidth={3}
            dot={false}
            name="Total Paid"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;