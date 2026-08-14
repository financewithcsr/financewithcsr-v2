import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "../calculators/GrowthChart.css";

function GrowthChart({
  investment,
  annualReturn,
  years,
}) {
  const data = [];

  let value = investment;

  for (let year = 1; year <= years; year++) {
    value *= 1 + annualReturn / 100;

    data.push({
      year: `Year ${year}`,
      value: Math.round(value),
    });
  }

  return (
    <section className="growth-chart">

      <h2>Investment Growth Chart</h2>

      <ResponsiveContainer
        width="100%"
        height={420}
      >
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="year" />

          <YAxis />

          <Tooltip
            formatter={(value) =>
              `₹ ${Number(value).toLocaleString("en-IN")}`
            }
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563EB"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </section>
  );
}

export default GrowthChart;