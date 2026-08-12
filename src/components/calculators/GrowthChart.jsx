import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./GrowthChart.css";

function GrowthChart({
  monthlyInvestment,
  annualReturn,
  years,
}) {
  const data = [];

  const monthlyRate = annualReturn / 12 / 100;

  for (let year = 1; year <= years; year++) {
    const months = year * 12;

    const invested = monthlyInvestment * months;

    const value =
      monthlyRate === 0
        ? invested
        : monthlyInvestment *
          (((Math.pow(1 + monthlyRate, months) - 1) /
            monthlyRate) *
            (1 + monthlyRate));

    data.push({
      year,
      invested,
      value,
    });
  }

  return (
    <div className="growth-chart">

      <h2>Investment Growth</h2>

      <ResponsiveContainer width="100%" height={350}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />

          <YAxis
            tickFormatter={(value) =>
              "₹" + (value / 100000).toFixed(1) + "L"
            }
          />

          <Tooltip
            formatter={(value) =>
              "₹ " + Number(value).toLocaleString("en-IN")
            }
          />

          <Line
            type="monotone"
            dataKey="value"
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