import { useNavigate } from "react-router-dom";

import "./RelatedCalculators.css";

const calculators = [
  {
    title: "SIP Calculator",
    path: "/investments/sip",
  },
  {
    title: "FD Calculator",
    path: "/investments/fd",
  },
  {
    title: "RD Calculator",
    path: "/investments/rd",
  },
  {
    title: "PPF Calculator",
    path: "/investments/ppf",
  },
  {
    title: "CAGR Calculator",
    path: "/investments/cagr",
  },
];

function RelatedCalculators() {
  const navigate = useNavigate();

  return (
    <section className="related-calculators">

      <h2>Explore More Investment Calculators</h2>

      <div className="related-grid">

        {calculators.map((item) => (

          <div
            className="related-card"
            key={item.title}
            onClick={() => navigate(item.path)}
          >
            <h3>{item.title}</h3>

            <button>
              Open Calculator →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RelatedCalculators;