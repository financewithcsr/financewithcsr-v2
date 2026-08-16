import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import Investments from "./pages/Investments/Investments";
import Loans from "./pages/Loans/Loans";
import Tax from "./pages/Tax/Tax";

import About from "./pages/About/About";

import IncomeTaxCalculator from "./pages/Tax/IncomeTaxCalculator";
import TaxRegimeComparison from "./pages/Tax/TaxRegimeComparison";
import HRACalculator from "./pages/Tax/HRACalculator";
import EightyCTaxSavingCalculator from "./pages/Tax/80CTaxSavingCalculator";
import HomeLoanTaxBenefitsCalculator from "./pages/Tax/HomeLoanTaxBenefitsCalculator";

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

        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* =========================
            ABOUT
        ========================= */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* =========================
            INVESTMENTS
        ========================= */}

        <Route
          path="/investments"
          element={<Investments />}
        />

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

        {/* =========================
            LOANS
        ========================= */}

        <Route
          path="/loans"
          element={<Loans />}
        />

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

        {/* =========================
            TAX
        ========================= */}

        <Route
          path="/tax"
          element={<Tax />}
        />

        <Route
          path="/tax/income-tax"
          element={<IncomeTaxCalculator />}
        />

        <Route
          path="/tax/regime-comparison"
          element={<TaxRegimeComparison />}
        />

        <Route
          path="/tax/hra"
          element={<HRACalculator />}
        />

        <Route
          path="/tax/80c"
          element={
            <EightyCTaxSavingCalculator />
          }
        />

        <Route
          path="/tax/home-loan-benefits"
          element={
            <HomeLoanTaxBenefitsCalculator />
          }
        />

      </Routes>
    </Layout>
  );
}

export default App;