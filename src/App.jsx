import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Investments from "./pages/Investments/Investments";

// Investment Calculators
import SIPCalculator from "./components/calculators/SIPCalculator";
import FDCalculator from "./components/fd/FDCalculator";
import RDCalculator from "./components/rd/RDCalculator";
import LumpsumCalculator from "./components/lumpsum/LumpsumCalculator";
import CAGRCalculator from "./components/cagr/CAGRCalculator";
import PPFCalculator from "./components/ppf/PPFCalculator";

// Loan Calculators
import EMICalculator from "./components/emi/EMICalculator";
import HomeLoanCalculator from "./components/homeloan/HomeLoanCalculator";
import CarLoanCalculator from "./components/carloan/CarLoanCalculator";
import PersonalLoanCalculator from "./components/personalloan/PersonalLoanCalculator";

function App() {
  return (
    <Layout>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Investments Landing */}
        <Route
          path="/investments"
          element={<Investments />}
        />

        {/* Investment Calculators */}
        <Route
          path="/investments/sip"
          element={<SIPCalculator />}
        />

        <Route
          path="/investments/fd"
          element={<FDCalculator />}
        />

        <Route
          path="/investments/rd"
          element={<RDCalculator />}
        />

        <Route
          path="/investments/lumpsum"
          element={<LumpsumCalculator />}
        />

        <Route
          path="/investments/cagr"
          element={<CAGRCalculator />}
        />

        <Route
          path="/investments/ppf"
          element={<PPFCalculator />}
        />

        {/* Loan Calculators */}

        <Route
          path="/loans/emi"
          element={<EMICalculator />}
        />

        <Route
          path="/loans/home-loan"
          element={<HomeLoanCalculator />}
        />

        <Route
          path="/loans/car-loan"
          element={<CarLoanCalculator />}
        />

        <Route
          path="/loans/personal-loan"
          element={<PersonalLoanCalculator />}
        />

      </Routes>
    </Layout>
  );
}

export default App;