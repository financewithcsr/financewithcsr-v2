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

import "./GrowthChart.css";

function GrowthChart({
  investment,
  monthlyInvestment,
  annualReturn,
  years,
  stepUp = 0,
}) {
  const startingSIP = monthlyInvestment ?? investment ?? 0;

  const data = [];

  const monthlyRate = annualReturn / 12 / 100;

  let investedAmount = 0;
  let currentValue = 0;

  /* =========================
     YEAR-BY-YEAR CALCULATION
  ========================= */

  for (let year = 1; year <= years; year++) {
    const monthlySIP =
      startingSIP *
      Math.pow(1 + stepUp / 100, year - 1);

    /*
      Add 12 monthly SIPs for this year.

      Investment is treated as beginning-of-month
      SIP, matching the main SIP calculator.
    */

    for (let month = 1; month <= 12; month++) {
      investedAmount += monthlySIP;

      currentValue =
        (currentValue + monthlySIP) *
        (1 + monthlyRate);
    }

    data.push({
      year,
      invested: Math.round(investedAmount),
      value: Math.round(currentValue),
      monthlySIP: Math.round(monthlySIP),
    });
  }

  /* =========================
     AXIS FORMAT
  ========================= */

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

  /* =========================
     TOOLTIP FORMAT
  ========================= */

  const formatCurrency = (value) => {
    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <div className="growth-chart">

      <h2>Investment Growth</h2>

      <ResponsiveContainer width="100%" height={250}>

        <LineChart
          data={data}
          margin={{
            top: 12,
            right: 20,
            left: 15,
            bottom: 6,
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
            width={75}
          />

          <Tooltip
            formatter={(value, name) => [
              formatCurrency(value),
              name === "value"
                ? "Total Value"
                : "Invested Amount",
            ]}
            labelFormatter={(year) =>
              `Year ${year}`
            }
          />

          <Legend />

          {/* INVESTED AMOUNT */}

          <Line
            type="monotone"
            dataKey="invested"
            name="Invested Amount"
            stroke="#94A3B8"
            strokeWidth={3}
            dot={false}
          />

          {/* TOTAL VALUE */}

          <Line
            type="monotone"
            dataKey="value"
            name="Total Value"
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