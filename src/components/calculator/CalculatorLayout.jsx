import "./CalculatorLayout.css";
import CalculatorSidebar from "./CalculatorSidebar";

function CalculatorLayout({
  title,
  description,
  left,
  right,
  table,
  faq,
  related,
}) {
  return (
    <div className="calculator-page">

      <div className="calculator-header">

        <h1>{title}</h1>

        <p>{description}</p>

      </div>

      <div className="calculator-main">

        <CalculatorSidebar />

        <div className="calculator-content">

          <div className="calculator-grid">

            <div className="calculator-left">
              {left}
            </div>

            <div className="calculator-right">
              {right}
            </div>

          </div>

          {table && (
            <section className="calculator-section">
              {table}
            </section>
          )}

          {faq && (
            <section className="calculator-section">
              {faq}
            </section>
          )}

          {related && (
            <section className="calculator-section">
              {related}
            </section>
          )}

        </div>

      </div>

    </div>
  );
}

export default CalculatorLayout;