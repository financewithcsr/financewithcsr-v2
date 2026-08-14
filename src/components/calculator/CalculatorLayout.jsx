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
    <main className="calculator-page">

      <header className="calculator-header">
        <h1>{title}</h1>

        <p>{description}</p>
      </header>

      <section className="calculator-main">

        <aside>
          <CalculatorSidebar />
        </aside>

        <div className="calculator-content">

          <div className="calculator-grid">

            <section className="calculator-left">
              {left}
            </section>

            <aside className="calculator-right">
              {right}
            </aside>

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

      </section>

    </main>
  );
}

export default CalculatorLayout;