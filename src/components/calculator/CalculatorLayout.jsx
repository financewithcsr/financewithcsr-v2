import "./CalculatorLayout.css";
import CalculatorSidebar from "./CalculatorSidebar";

function CalculatorLayout({
  title,
  description,
  left,
  right,
  table,
  benefits,
  faq,
  related,
}) {
  return (
    <main className="csl-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="csl-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      {/* =========================
          MAIN 3-COLUMN LAYOUT
      ========================= */}

      <section className="csl-main">

        {/* COLUMN 1 — SIDEBAR */}

        <aside className="csl-sidebar">
          <CalculatorSidebar />
        </aside>

        {/* COLUMN 2 — INPUTS + GROWTH */}

        <section className="csl-middle">

          <div className="csl-inputs">
            {left}
          </div>

          {table && (
            <div className="csl-growth">
              {table}
            </div>
          )}

        </section>

        {/* COLUMN 3 — RESULTS */}

        <aside className="csl-results">
          {right}
        </aside>

      </section>

      {/* =========================
          BENEFITS
      ========================= */}

      {benefits && (
        <section className="csl-section">
          {benefits}
        </section>
      )}

      {/* =========================
          FAQ
      ========================= */}

      {faq && (
        <section className="csl-section">
          {faq}
        </section>
      )}

      {/* =========================
          RELATED CALCULATORS
      ========================= */}

      {related && (
        <section className="csl-section">
          {related}
        </section>
      )}

    </main>
  );
}

export default CalculatorLayout;