import { useState } from "react";

import CalculatorLayout from "../../components/calculator/CalculatorLayout";
import InputSlider from "../../components/ui/InputSlider";

function TaxRegimeComparison() {
  const [annualSalary, setAnnualSalary] =
    useState(1500000);

  const [otherIncome, setOtherIncome] =
    useState(0);

  const [deductions, setDeductions] =
    useState(150000);

  const standardDeductionNew = 75000;
  const standardDeductionOld = 50000;

  const grossIncome =
    annualSalary + otherIncome;

  /* =========================
     TAXABLE INCOME
  ========================= */

  const newRegimeTaxableIncome =
    Math.max(
      0,
      grossIncome -
        standardDeductionNew
    );

  const oldRegimeTaxableIncome =
    Math.max(
      0,
      grossIncome -
        standardDeductionOld -
        deductions
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
     NEW REGIME TAX + RELIEF
  ========================= */

  const newTaxBeforeRelief =
    calculateNewRegimeTax(
      newRegimeTaxableIncome
    );

  let newTaxAfterRelief =
    newTaxBeforeRelief;

  let newRebate = 0;
  let newMarginalRelief = 0;

  if (
    newRegimeTaxableIncome <=
    1200000
  ) {
    newRebate = Math.min(
      newTaxBeforeRelief,
      60000
    );

    newTaxAfterRelief =
      newTaxBeforeRelief -
      newRebate;
  } else {
    const incomeAboveLimit =
      newRegimeTaxableIncome -
      1200000;

    if (
      newTaxBeforeRelief >
      incomeAboveLimit
    ) {
      newMarginalRelief =
        newTaxBeforeRelief -
        incomeAboveLimit;

      newTaxAfterRelief =
        incomeAboveLimit;
    }
  }

  const newCess =
    newTaxAfterRelief * 0.04;

  const newTotalTax =
    newTaxAfterRelief +
    newCess;

  /* =========================
     OLD REGIME TAX + REBATE
  ========================= */

  const oldTaxBeforeRebate =
    calculateOldRegimeTax(
      oldRegimeTaxableIncome
    );

  const oldRebate =
    oldRegimeTaxableIncome <=
    500000
      ? Math.min(
          oldTaxBeforeRebate,
          12500
        )
      : 0;

  const oldTaxAfterRebate =
    Math.max(
      0,
      oldTaxBeforeRebate -
        oldRebate
    );

  const oldCess =
    oldTaxAfterRebate * 0.04;

  const oldTotalTax =
    oldTaxAfterRebate +
    oldCess;

  /* =========================
     COMPARISON
  ========================= */

  const difference =
    Math.abs(
      oldTotalTax -
        newTotalTax
    );

  const betterRegime =
    oldTotalTax <
    newTotalTax
      ? "Old Regime"
      : newTotalTax <
        oldTotalTax
      ? "New Regime"
      : "Same Tax";

  const monthlyDifference =
    difference / 12;

  return (
    <CalculatorLayout
      title="Old vs New Tax Regime Calculator"
      description="Compare your estimated tax under the Old and New Tax Regimes and see which option may result in lower tax."

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

          <InputSlider
            label="Eligible Old Regime Deductions"
            value={deductions}
            setValue={setDeductions}
            min={0}
            max={10000000}
            step={1000}
            prefix="₹ "
          />

          <div
            style={{
              background: "#F8FAFC",
              border:
                "1px solid #E2E8F0",
              borderRadius: "14px",
              padding: "18px",
              color: "#64748B",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            This input represents eligible
            deductions that may be available
            under the Old Tax Regime.
          </div>
        </>
      }

      /* =========================
         RESULTS
      ========================= */

      right={
        <>
          <div
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "25px",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#0F172A",
                textAlign: "center",
              }}
            >
              Tax Regime Comparison
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  borderRadius: "14px",
                  background: "#F8FAFC",
                  border:
                    "1px solid #E2E8F0",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#64748B",
                    fontSize: "13px",
                  }}
                >
                  Old Regime
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#0F172A",
                  }}
                >
                  ₹{" "}
                  {Math.round(
                    oldTotalTax
                  ).toLocaleString(
                    "en-IN"
                  )}
                </div>
              </div>

              <div
                style={{
                  padding: "20px",
                  borderRadius: "14px",
                  background: "#EFF6FF",
                  border:
                    "1px solid #BFDBFE",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#64748B",
                    fontSize: "13px",
                  }}
                >
                  New Regime
                </div>

                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#2563EB",
                  }}
                >
                  ₹{" "}
                  {Math.round(
                    newTotalTax
                  ).toLocaleString(
                    "en-IN"
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "4px",
              background:
                betterRegime ===
                "Same Tax"
                  ? "#F8FAFC"
                  : "#F0FDF4",
              borderRadius: "18px",
              padding: "25px",
              border:
                betterRegime ===
                "Same Tax"
                  ? "1px solid #E2E8F0"
                  : "1px solid #BBF7D0",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#0F172A",
              }}
            >
              Potentially Lower Tax
            </h3>

            <h1
              style={{
                color:
                  betterRegime ===
                  "Same Tax"
                    ? "#0F172A"
                    : "#16A34A",
                margin:
                  "10px 0",
                fontSize: "30px",
              }}
            >
              {betterRegime}
            </h1>

            {betterRegime !==
              "Same Tax" && (
              <p
                style={{
                  margin: 0,
                  color: "#64748B",
                  fontSize: "14px",
                }}
              >
                Difference: ₹{" "}
                {Math.round(
                  difference
                ).toLocaleString(
                  "en-IN"
                )}{" "}
                per year
                <br />
                Approx. ₹{" "}
                {Math.round(
                  monthlyDifference
                ).toLocaleString(
                  "en-IN"
                )}{" "}
                per month
              </p>
            )}
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "22px",
              marginTop: "4px",
              border:
                "1px solid #E2E8F0",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                color: "#0F172A",
              }}
            >
              Calculation Summary
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "8px 0",
              }}
            >
              <span>
                Gross Income
              </span>

              <strong>
                ₹{" "}
                {grossIncome.toLocaleString(
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
                New Regime Taxable Income
              </span>

              <strong>
                ₹{" "}
                {newRegimeTaxableIncome.toLocaleString(
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
                Old Regime Taxable Income
              </span>

              <strong>
                ₹{" "}
                {oldRegimeTaxableIncome.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          </div>
        </>
      }
    />
  );
}

export default TaxRegimeComparison;