import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import "./PieChart.css";

function InvestmentPieChart({
  investedAmount,
  returns,
}) {
  const data = [
    {
      name: "Invested Amount",
      value: Math.round(investedAmount),
    },
    {
      name: "Estimated Returns",
      value: Math.round(returns),
    },
  ];

  const COLORS = ["#2563EB", "#22C55E"];

  const totalValue = investedAmount + returns;

  const formatCompact = (value) => {
    if (value >= 10000000) {
      return `₹ ${(value / 10000000).toFixed(2)} Cr`;
    }

    if (value >= 100000) {
      return `₹ ${(value / 100000).toFixed(2)} L`;
    }

    return `₹ ${Math.round(value).toLocaleString("en-IN")}`;
  };

  return (
    <div className="pie-card">

      <h2>Investment Breakdown</h2>

      <div className="pie-wrapper">

        <ResponsiveContainer width="100%" height={320}>

          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={115}
              paddingAngle={4}
              dataKey="value"
              animationDuration={900}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) =>
                "₹ " + Number(value).toLocaleString("en-IN")
              }
            />

            <Legend verticalAlign="bottom" />

          </PieChart>

        </ResponsiveContainer>

        <div className="pie-center">

          <span>Total Value</span>

          <h3>{formatCompact(totalValue)}</h3>

        </div>

      </div>

    </div>
  );
}

export default InvestmentPieChart;