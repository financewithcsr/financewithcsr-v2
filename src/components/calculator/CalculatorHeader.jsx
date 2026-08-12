import "./CalculatorHeader.css";

function CalculatorHeader({ title, description }) {
  return (
    <div className="calculator-header">

      <h1>{title}</h1>

      <p>{description}</p>

    </div>
  );
}

export default CalculatorHeader;