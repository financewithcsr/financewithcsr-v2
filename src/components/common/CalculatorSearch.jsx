import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CalculatorSearch.css";

const calculators = [
  { name: "SIP Calculator", path: "/investments/sip" },
  { name: "FD Calculator", path: "/investments/fd" },
  { name: "RD Calculator", path: "/investments/rd" },
  { name: "Lumpsum Calculator", path: "/investments/lumpsum" },
  { name: "PPF Calculator", path: "/investments/ppf" },
  { name: "CAGR Calculator", path: "/investments/cagr" },
  { name: "EMI Calculator", path: "/loans/emi" },
  { name: "Home Loan Calculator", path: "/loans/home-loan" },
  { name: "Car Loan Calculator", path: "/loans/car-loan" },
  { name: "Personal Loan Calculator", path: "/loans/personal-loan" },
];

function CalculatorSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = calculators.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="calculator-search">

      <h2>Find Your Calculator</h2>

      <input
        type="text"
        placeholder="Search calculator..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="calculator-results">

        {filtered.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </button>
        ))}

      </div>

    </section>
  );
}

export default CalculatorSearch;