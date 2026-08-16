import { useState } from "react";

import CalculatorLayout from "../../components/calculator/CalculatorLayout";
import InputSlider from "../../components/ui/InputSlider";

import EightyCBenefits from "./80CBenefits";
import EightyCFAQ from "./80CFAQ";
import EightyCRelatedCalculators from "./80CRelatedCalculators";

function EightyCTaxSavingCalculator() {
  const [lifeInsurance, setLifeInsurance] =
    useState(30000);

  const [epf, setEpf] =
    useState(60000);

  const [ppf, setPpf] =
    useState(30000);

  const [elss, setElss] =
    useState(20000);

  const [homeLoanPrincipal, setHomeLoanPrincipal] =
    useState(0);

  const [tuitionFees, setTuitionFees] =
    useState(0);

  const [nsc, setNsc] =
    useState(0);

  const [otherEligible, setOtherEligible] =
    useState(0);

  /* =========================
     80C CALCULATION
  ========================= */

  const totalInvestments =
    lifeInsurance +
    epf +
    ppf +
    elss +
    homeLoanPrincipal +
    tuitionFees +
    nsc +
    otherEligible;

  const maximum80CLimit = 150000;

  const eligible80CDeduction =
    Math.min(
      totalInvestments,
      maximum80CLimit
    );

  const excessInvestment =
    Math.max(
      0,
      totalInvestments -
        maximum80CLimit
    );

  const remaining80CLimit =
    Math.max(
      0,
      maximum80CLimit -
        totalInvestments
    );

  /* =========================
     ESTIMATED TAX BENEFIT
  ========================= */

  const taxSavingAt5 =
    eligible80CDeduction * 0.05;

  const taxSavingAt20 =
    eligible80CDeduction * 0.20;

  const taxSavingAt30 =
    eligible80CDeduction * 0.30;

  return (
    <CalculatorLayout
      title="80C Tax Saving Calculator"
      description="Calculate your eligible Section 80C deduction, remaining limit and estimated tax benefit under the Old Tax Regime."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Life Insurance Premium"
            value={lifeInsurance}
            setValue={setLifeInsurance}
            min={0}
            max={500000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="EPF / Provident Fund"
            value={epf}
            setValue={setEpf}
            min={0}
            max={1000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="PPF Investment"
            value={ppf}
            setValue={setPpf}
            min={0}
            max={150000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="ELSS Investment"
            value={elss}
            setValue={setElss}
            min={0}
            max={500000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Home Loan Principal"
            value={homeLoanPrincipal}
            setValue={setHomeLoanPrincipal}
            min={0}
            max={1000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Eligible Tuition Fees"
            value={tuitionFees}
            setValue={setTuitionFees}
            min={0}
            max={500000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="NSC Investment"
            value={nsc}
            setValue={setNsc}
            min={0}
            max={500000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Other Eligible 80C Investments"
            value={otherEligible}
            setValue={setOtherEligible}
            min={0}
            max={500000}
            step={1000}
            prefix="₹ "
          />
        </>
      }

      /* =========================
         RESULTS
      ========================= */

      right={
        <>
          {/* TOTAL INVESTMENT */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "25px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#0F172A",
              }}
            >
              Total 80C Investments
            </h3>

            <h1
              style={{
                color: "#2563EB",
                margin: "10px 0",
              }}
            >
              ₹{" "}
              {Math.round(
                totalInvestments
              ).toLocaleString("en-IN")}
            </h1>
          </div>

          {/* ELIGIBLE DEDUCTION */}

          <div
            style={{
              background: "#F0FDF4",
              border: "1px solid #BBF7D0",
              borderRadius: "18px",
              padding: "25px",
              marginTop: "4px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#166534",
              }}
            >
              Eligible 80C Deduction
            </h3>

            <h1
              style={{
                color: "#16A34A",
                margin: "10px 0",
              }}
            >
              ₹{" "}
              {Math.round(
                eligible80CDeduction
              ).toLocaleString("en-IN")}
            </h1>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                fontSize: "13px",
              }}
            >
              Maximum combined limit:
              ₹1,50,000
            </p>
          </div>

          {/* LIMIT BREAKDOWN */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "22px",
              marginTop: "4px",
              border: "1px solid #E2E8F0",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                color: "#0F172A",
              }}
            >
              80C Limit Breakdown
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Maximum 80C Limit
              </span>

              <strong>
                ₹1,50,000
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Eligible Deduction
              </span>

              <strong
                style={{
                  color: "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  eligible80CDeduction
                ).toLocaleString("en-IN")}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Remaining Limit
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  remaining80CLimit
                ).toLocaleString("en-IN")}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Excess Investment
              </span>

              <strong
                style={{
                  color:
                    excessInvestment > 0
                      ? "#DC2626"
                      : "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  excessInvestment
                ).toLocaleString("en-IN")}
              </strong>
            </div>
          </div>

          {/* ESTIMATED TAX BENEFIT */}

          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "18px",
              padding: "22px",
              marginTop: "4px",
              border: "1px solid #E2E8F0",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                color: "#0F172A",
              }}
            >
              Estimated Tax Benefit
            </h3>

            <p
              style={{
                marginTop: 0,
                color: "#64748B",
                fontSize: "13px",
                lineHeight: 1.5,
              }}
            >
              Approximate tax reduction before
              cess, assuming the entire eligible
              deduction falls within the indicated
              marginal tax rate.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                At 5% tax rate
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  taxSavingAt5
                ).toLocaleString("en-IN")}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                At 20% tax rate
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  taxSavingAt20
                ).toLocaleString("en-IN")}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                At 30% tax rate
              </span>

              <strong
                style={{
                  color: "#2563EB",
                }}
              >
                ₹{" "}
                {Math.round(
                  taxSavingAt30
                ).toLocaleString("en-IN")}
              </strong>
            </div>
          </div>

          {/* IMPORTANT NOTE */}

          <div
            style={{
              background: "#FFF7ED",
              border: "1px solid #FED7AA",
              borderRadius: "14px",
              padding: "16px",
              color: "#9A3412",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            <strong>
              Important:
            </strong>{" "}
            Section 80C deductions are available
            under the Old Tax Regime. The combined
            limit for eligible 80C, 80CCC and
            80CCD(1) contributions is ₹1,50,000.
            The actual tax benefit depends on your
            taxable income and applicable tax rate.
          </div>
        </>
      }

      /* =========================
         BENEFITS
      ========================= */

      benefits={
        <EightyCBenefits />
      }

      /* =========================
         FAQ
      ========================= */

      faq={
        <EightyCFAQ />
      }

      /* =========================
         RELATED CALCULATORS
      ========================= */

      related={
        <EightyCRelatedCalculators />
      }
    />
  );
}

export default EightyCTaxSavingCalculator;