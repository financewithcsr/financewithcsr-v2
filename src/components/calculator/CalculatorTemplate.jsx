import "./CalculatorTemplate.css";

function CalculatorTemplate({
  header,
  left,
  right,
  table,
  benefits,
  faq,
  related,
  share,
}) {
  return (
    <div className="calculator-template">

      {header}

      <div className="calculator-grid">

        <div className="calculator-left">
          {left}
        </div>

        <div className="calculator-right">
          {right}
        </div>

      </div>

      {table}

      {benefits}

      {faq}

      {related}

      {share}

    </div>
  );
}

export default CalculatorTemplate;