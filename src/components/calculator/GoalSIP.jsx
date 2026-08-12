import "./GoalSIP.css";

function GoalSIP({
  annualReturn,
  years,
}) {

  const targetAmount = 10000000; // ₹1 Crore

  const monthlyRate = annualReturn / 12 / 100;
  const months = years * 12;

  const requiredSIP =
    monthlyRate === 0
      ? targetAmount / months
      : targetAmount /
        ((((Math.pow(1 + monthlyRate, months) - 1) /
          monthlyRate) *
          (1 + monthlyRate)));

  return (
    <section className="goal-sip">

      <h2>🎯 Goal SIP Planner</h2>

      <p>

        To accumulate

        <strong> ₹1 Crore </strong>

        in

        <strong> {years} years </strong>

        at

        <strong> {annualReturn}% annual return</strong>,

        you need to invest approximately

      </p>

      <div className="goal-result">

        ₹ {Math.round(requiredSIP).toLocaleString("en-IN")}

        <span>/month</span>

      </div>

    </section>
  );
}

export default GoalSIP;