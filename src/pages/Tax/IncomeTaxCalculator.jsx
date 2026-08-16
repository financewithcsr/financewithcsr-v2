import { useState } from "react";

import CalculatorLayout from "../../components/calculator/CalculatorLayout";
import SummaryCard from "../../components/calculator/SummaryCard";
import InputSlider from "../../components/ui/InputSlider";

import TaxBenefits from "./TaxBenefits";
import TaxFAQ from "./TaxFAQ";
import TaxRelatedCalculators from "./TaxRelatedCalculators";

function IncomeTaxCalculator() {
  const [annualSalary, setAnnualSalary] =
    useState(1275000);

  const [otherIncome, setOtherIncome] =
    useState(0);

  const [regime, setRegime] =
    useState("new");

  const [deductions, setDeductions] =
    useState(150000);

  /* =========================
     STANDARD DEDUCTION
  ========================= */

  const standardDeduction =
    regime === "new"
      ? 75000
      : 50000;

  /* =========================
     INCOME
  ========================= */

  const grossIncome =
    annualSalary + otherIncome;

  const totalDeductions =
    regime === "new"
      ? standardDeduction
      : standardDeduction + deductions;

  const taxableIncome = Math.max(
    0,
    grossIncome - totalDeductions
  );

  /* =========================
     NEW REGIME TAX
  ========================= */

  const calculateNewRegimeTax = (income) => {
    let tax = 0;

    if (income <= 400000) {
      tax = 0;
    } else if (income <= 800000) {
      tax =
        (income - 400000) * 0.05;
    } else if (income <= 1200000) {
      tax =
        20000 +
        (income - 800000) * 0.10;
    } else if (income <= 1600000) {
      tax =
        60000 +
        (income - 1200000) * 0.15;
    } else if (income <= 2000000) {
      tax =
        120000 +
        (income - 1600000) * 0.20;
    } else if (income <= 2400000) {
      tax =
        200000 +
        (income - 2000000) * 0.25;
    } else {
      tax =
        300000 +
        (income - 2400000) * 0.30;
    }

    return tax;
  };

  /* =========================
     OLD REGIME TAX
  ========================= */

  const calculateOldRegimeTax = (income) => {
    let tax = 0;

    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax =
        (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax =
        12500 +
        (income - 500000) * 0.20;
    } else {
      tax =
        112500 +
        (income - 1000000) * 0.30;
    }

    return tax;
  };

  /* =========================
     TAX BEFORE REBATE
  ========================= */

  const taxBeforeRebate =
    regime === "new"
      ? calculateNewRegimeTax(
          taxableIncome
        )
      : calculateOldRegimeTax(
          taxableIncome
        );

  /* =========================
     REBATE + MARGINAL RELIEF
  ========================= */

  let rebate = 0;
  let marginalRelief = 0;

  let taxAfterRelief =
    taxBeforeRebate;

  if (regime === "new") {
    if (taxableIncome <= 1200000) {
      rebate = Math.min(
        taxBeforeRebate,
        60000
      );

      taxAfterRelief =
        taxBeforeRebate - rebate;
    } else {
      const incomeAboveLimit =
        taxableIncome - 1200000;

      if (
        taxBeforeRebate >
        incomeAboveLimit
      ) {
        marginalRelief =
          taxBeforeRebate -
          incomeAboveLimit;

        taxAfterRelief =
          incomeAboveLimit;
      }
    }
  }

  /* =========================
     OLD REGIME REBATE
  ========================= */

  if (regime === "old") {
    if (taxableIncome <= 500000) {
      rebate = Math.min(
        taxBeforeRebate,
        12500
      );

      taxAfterRelief =
        taxBeforeRebate - rebate;
    }
  }

  /* =========================
     CESS
  ========================= */

  const cess =
    taxAfterRelief * 0.04;

  const totalTax =
    taxAfterRelief + cess;

  const monthlyTax =
    totalTax / 12;

  /* =========================
     EFFECTIVE TAX RATE
  ========================= */

  const effectiveTaxRate =
    grossIncome > 0
      ? (totalTax / grossIncome) * 100
      : 0;

  return (
    <CalculatorLayout
      title="Income Tax Calculator"
      description="Calculate your estimated income tax, taxable income and total tax payable."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Annual Salary"
            value={annualSalary}
            setValue={setAnnualSalary}
            min={100000}
            max={100000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Other Income"
            value={otherIncome}
            setValue={setOtherIncome}
            min={0}
            max={50000000}
            step={1000}
            prefix="₹ "
          />

          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "18px",
              border:
                "1px solid #E2E8F0",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "12px",
                color: "#0F172A",
                fontWeight: 600,
              }}
            >
              Tax Regime
            </label>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setRegime("new")
                }
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border:
                    regime === "new"
                      ? "2px solid #2563EB"
                      : "1px solid #CBD5E1",
                  background:
                    regime === "new"
                      ? "#EFF6FF"
                      : "#ffffff",
                  color: "#0F172A",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                New Regime
              </button>

              <button
                type="button"
                onClick={() =>
                  setRegime("old")
                }
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border:
                    regime === "old"
                      ? "2px solid #2563EB"
                      : "1px solid #CBD5E1",
                  background:
                    regime === "old"
                      ? "#EFF6FF"
                      : "#ffffff",
                  color: "#0F172A",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Old Regime
              </button>
            </div>
          </div>

          {regime === "old" && (
            <InputSlider
              label="Eligible Deductions"
              value={deductions}
              setValue={setDeductions}
              min={0}
              max={10000000}
              step={1000}
              prefix="₹ "
            />
          )}
        </>
      }

      /* =========================
         RESULTS
      ========================= */

      right={
        <>
          <SummaryCard
            investedAmount={grossIncome}
            returns={totalTax}
            totalValue={taxableIncome}
            title="Tax Summary"
            investedLabel="Gross Income"
            returnsLabel="Total Tax"
            totalLabel="Taxable Income"
          />

          <div
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "25px",
              marginTop: "4px",
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
              Total Tax Payable
            </h3>

            <h1
              style={{
                color: "#2563EB",
                margin: "10px 0 0",
              }}
            >
              ₹{" "}
              {Math.round(
                totalTax
              ).toLocaleString("en-IN")}
            </h1>

            <p
              style={{
                marginTop: "8px",
                color: "#64748B",
                fontSize: "14px",
              }}
            >
              Approx. ₹{" "}
              {Math.round(
                monthlyTax
              ).toLocaleString("en-IN")}{" "}
              per month
            </p>
          </div>

          <div
            style={{
              background: "#F8FAFC",
              borderRadius: "18px",
              padding: "22px",
              marginTop: "4px",
              border:
                "1px solid #E2E8F0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "8px 0",
              }}
            >
              <span>
                Standard Deduction
              </span>

              <strong>
                ₹{" "}
                {standardDeduction.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "8px 0",
              }}
            >
              <span>
                Total Deductions
              </span>

              <strong>
                ₹{" "}
                {totalDeductions.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "8px 0",
              }}
            >
              <span>
                Tax Before Rebate
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  taxBeforeRebate
                ).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            {rebate > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  padding: "8px 0",
                }}
              >
                <span>
                  Section 87A Rebate
                </span>

                <strong
                  style={{
                    color: "#16A34A",
                  }}
                >
                  - ₹{" "}
                  {Math.round(
                    rebate
                  ).toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>
            )}

            {marginalRelief > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  padding: "8px 0",
                }}
              >
                <span>
                  Marginal Relief
                </span>

                <strong
                  style={{
                    color: "#16A34A",
                  }}
                >
                  - ₹{" "}
                  {Math.round(
                    marginalRelief
                  ).toLocaleString(
                    "en-IN"
                  )}
                </strong>
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "8px 0",
              }}
            >
              <span>
                Health & Education Cess
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  cess
                ).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "12px 0 0",
                marginTop: "8px",
                borderTop:
                  "1px solid #CBD5E1",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                Effective Tax Rate
              </span>

              <strong
                style={{
                  color: "#2563EB",
                }}
              >
                {effectiveTaxRate.toFixed(2)}%
              </strong>
            </div>
          </div>

          {regime === "new" &&
            taxableIncome > 1200000 &&
            marginalRelief > 0 && (
              <div
                style={{
                  background: "#F0FDF4",
                  border:
                    "1px solid #BBF7D0",
                  borderRadius: "14px",
                  padding: "16px",
                  color: "#166534",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                <strong>
                  Marginal relief applied
                </strong>

                <br />

                Your income is only slightly
                above ₹12 lakh, so marginal
                relief limits the tax increase
                to the amount by which your
                income exceeds ₹12 lakh.
              </div>
            )}
        </>
      }

      /* =========================
         BENEFITS
      ========================= */

      benefits={
        <TaxBenefits />
      }

      /* =========================
         FAQ
      ========================= */

      faq={
        <TaxFAQ />
      }

      /* =========================
         RELATED CALCULATORS
      ========================= */

      related={
        <TaxRelatedCalculators />
      }
    />
  );
}

export default IncomeTaxCalculator;