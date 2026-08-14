import { useState } from "react";

import CalculatorLayout from "../calculator/CalculatorLayout";
import SummaryCard from "../calculator/SummaryCard";
import InvestmentPieChart from "../calculator/PieChart";
import InputSlider from "../ui/InputSlider";

import CAGRBenefits from "./CAGRBenefits";
import CAGRFAQ from "./CAGRFAQ";
import RelatedCalculators from "../common/RelatedCalculators";
import CTA from "../common/CTA";

function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(200000);
  const [years, setYears] = useState(5);

  const cagr =
    (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;

  const returns = finalValue - initialValue;

  return (
    <>
      <CalculatorLayout
        title="CAGR Calculator"
        description="Calculate the Compound Annual Growth Rate (CAGR) of your investment."

        left={
          <>
            <InputSlider
              label="Initial Investment"
              value={initialValue}
              setValue={setInitialValue}
              min={1000}
              max={10000000}
              step={1000}
              prefix="₹ "
            />

            <InputSlider
              label="Final Value"
              value={finalValue}
              setValue={setFinalValue}
              min={1000}
              max={50000000}
              step={1000}
              prefix="₹ "
            />

            <InputSlider
              label="Investment Period"
              value={years}
              setValue={setYears}
              min={1}
              max={40}
              suffix=" Years"
            />
          </>
        }

        right={
          <>
            <InvestmentPieChart
              investedAmount={initialValue}
              returns={returns}
            />

            <SummaryCard
              investedAmount={initialValue}
              returns={returns}
              totalValue={finalValue}
            />

            <div
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "18px",
                marginTop: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                textAlign: "center",
              }}
            >
              <h3>Compound Annual Growth Rate</h3>

              <h1 style={{ color: "#2563EB" }}>
                {cagr.toFixed(2)}%
              </h1>
            </div>
          </>
        }
      />

      <CAGRBenefits />

      <CAGRFAQ />

      <RelatedCalculators />

      <CTA />
    </>
  );
}

export default CAGRCalculator;