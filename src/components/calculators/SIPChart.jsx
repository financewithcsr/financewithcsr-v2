import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SIPChart({ investedAmount, wealthGained }) {
  const maturityValue = investedAmount + wealthGained;

  const data = [
    {
      name: "Investment",
      value: investedAmount,
    },
    {
      name: "Returns",
      value: wealthGained,
    },
  ];

  const COLORS = ["#2563EB", "#22C55E"];

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
            stroke="white"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          {/* Center Text */}
          <text
            x="50%"
            y="48%"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="24"
            fontWeight="700"
          >
            ₹{(maturityValue / 100000).toFixed(1)}L
          </text>

          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            fill="#DCE7FF"
            fontSize="13"
          >
            Maturity Value
          </text>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "-20px",
    fontSize: "14px",
    fontWeight: "600",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <span
      style={{
        width: "12px",
        height: "12px",
        background: "#2563EB",
        borderRadius: "50%",
        display: "inline-block",
      }}
    ></span>

    <span style={{ color: "white" }}>Investment</span>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <span
      style={{
        width: "12px",
        height: "12px",
        background: "#22C55E",
        borderRadius: "50%",
        display: "inline-block",
      }}
    ></span>

    <span style={{ color: "white" }}>Returns</span>
  </div>
</div>
    </div>
  );
}

export default SIPChart;