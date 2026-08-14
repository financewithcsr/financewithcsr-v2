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
  investment,
  annualReturn,
  years,
}) {
  const data = [];

  for (let year = 1; year <= years; year++) {
    const maturity =
      investment * Math.pow(1 + annualReturn / 100, year);

    data.push({
      year,
      invested: investment,
      maturity,
    });
  }

  return (
    <div className="growth-chart">

      <h2>Lumpsum Growth Over Time</h2>

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
            dataKey="maturity"
            stroke="#2563EB"
            strokeWidth={4}
            dot={false}
            name="Investment Value"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default GrowthChart;