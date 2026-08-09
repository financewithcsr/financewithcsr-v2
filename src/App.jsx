import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home/Home";
import Investments from "./pages/Investments/Investments";
import Loans from "./pages/Loans/Loans";
import Tax from "./pages/Tax/Tax";
import Planning from "./pages/Planning/Planning";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

import SIPCalculator from "./components/calculators/SIPCalculator";
import EMICalculator from "./components/calculators/EMICalculator";

import "./styles/hero.css";
import "./styles/stats.css";
import "./styles/calculators.css";
import "./styles/why.css";
import "./styles/blog.css";
import "./styles/cta.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/investments" element={<Investments />} />
        <Route
          path="/investments/sip-calculator"
          element={<SIPCalculator />}
        />

        <Route path="/loans" element={<Loans />} />
        <Route
          path="/loans/emi-calculator"
          element={<EMICalculator />}
        />

        <Route path="/tax" element={<Tax />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;