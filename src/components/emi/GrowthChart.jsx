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
  let totalPrincipal = 0;
  let totalInterest = 0;

  for (let month = 1; month <= months; month++) {
    const interest =
      monthlyRate === 0
        ? 0
        : balance * monthlyRate;

    const principal =
      emi - interest;

    balance -= principal;

    if (balance < 0) {
      balance = 0;
    }

    totalPrincipal += principal;
    totalInterest += interest;

    if (month % 12 === 0 || month === months) {
      data.push({
        year: Math.ceil(month / 12),
        principal: Math.round(totalPrincipal),
        interest: Math.round(totalInterest),
        balance: Math.round(balance),
      });
    }
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
        Loan Repayment Growth
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
              name === "principal"
                ? "Principal Repaid"
                : name === "interest"
                ? "Interest Paid"
                : "Outstanding Balance",
            ]}
            labelFormatter={(year) =>
              `Year ${year}`
            }
          />

          <Legend />

          <Line
            type="monotone"
            dataKey="principal"
            name="Principal Repaid"
            stroke="#2563EB"
            strokeWidth={4}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="interest"
            name="Interest Paid"
            stroke="#94A3B8"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="balance"
            name="Outstanding Balance"
            stroke="#16A34A"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;