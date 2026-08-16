import { useState } from "react";

import CalculatorLayout from "../../components/calculator/CalculatorLayout";
import InputSlider from "../../components/ui/InputSlider";

import HomeLoanTaxBenefits from "./HomeLoanTaxBenefits";
import HomeLoanTaxBenefitsFAQ from "./HomeLoanTaxBenefitsFAQ";
import HomeLoanTaxRelatedCalculators from "./HomeLoanTaxRelatedCalculators";

function HomeLoanTaxBenefitsCalculator() {
  const [principalRepaid, setPrincipalRepaid] =
    useState(100000);

  const [interestPaid, setInterestPaid] =
    useState(200000);

  const [taxRate, setTaxRate] =
    useState(30);

  /* =========================
     TAX DEDUCTION LIMITS
  ========================= */

  const section80CLimit = 150000;
  const section24bLimit = 200000;

  /* =========================
     ELIGIBLE DEDUCTIONS
  ========================= */

  const eligible80CDeduction =
    Math.min(
      principalRepaid,
      section80CLimit
    );

  const eligible24bDeduction =
    Math.min(
      interestPaid,
      section24bLimit
    );

  const totalEligibleDeduction =
    eligible80CDeduction +
    eligible24bDeduction;

  /* =========================
     EXCESS AMOUNTS
  ========================= */

  const excessPrincipal =
    Math.max(
      0,
      principalRepaid -
        section80CLimit
    );

  const excessInterest =
    Math.max(
      0,
      interestPaid -
        section24bLimit
    );

  /* =========================
     ESTIMATED TAX SAVING
  ========================= */

  const estimatedTaxSaving =
    totalEligibleDeduction *
    (taxRate / 100);

  const taxSavingWithCess =
    estimatedTaxSaving * 1.04;

  return (
    <CalculatorLayout
      title="Home Loan Tax Benefits Calculator"
      description="Estimate your eligible home-loan tax deductions under Section 80C and Section 24(b) under the Old Tax Regime."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Home Loan Principal Repaid"
            value={principalRepaid}
            setValue={setPrincipalRepaid}
            min={0}
            max={1000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Home Loan Interest Paid"
            value={interestPaid}
            setValue={setInterestPaid}
            min={0}
            max={1000000}
            step={1000}
            prefix="₹ "
          />

          {/* =========================
             TAX RATE
          ========================= */}

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
              Applicable Marginal Tax Rate
            </label>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {[5, 20, 30].map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() =>
                    setTaxRate(rate)
                  }
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border:
                      taxRate === rate
                        ? "2px solid #2563EB"
                        : "1px solid #CBD5E1",
                    background:
                      taxRate === rate
                        ? "#EFF6FF"
                        : "#ffffff",
                    color: "#0F172A",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {rate}%
                </button>
              ))}
            </div>

            <p
              style={{
                margin:
                  "12px 0 0",
                color: "#64748B",
                fontSize: "12px",
                lineHeight: 1.5,
              }}
            >
              This is an illustrative marginal
              tax rate. Your actual tax benefit
              depends on your complete taxable
              income and applicable provisions.
            </p>
          </div>

          {/* =========================
             REGIME NOTE
          ========================= */}

          <div
            style={{
              background: "#FFF7ED",
              border:
                "1px solid #FED7AA",
              borderRadius: "14px",
              padding: "16px",
              color: "#9A3412",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            <strong>
              Old Tax Regime:
            </strong>{" "}
            This calculator estimates the
            home-loan deductions available
            under the Old Tax Regime.
          </div>
        </>
      }

      /* =========================
         RESULTS
      ========================= */

      right={
        <>
          {/* TOTAL DEDUCTION */}

          <div
            style={{
              background: "#F0FDF4",
              border:
                "1px solid #BBF7D0",
              borderRadius: "18px",
              padding: "25px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#166534",
              }}
            >
              Total Eligible Deduction
            </h3>

            <h1
              style={{
                color: "#16A34A",
                margin:
                  "10px 0",
              }}
            >
              ₹{" "}
              {Math.round(
                totalEligibleDeduction
              ).toLocaleString(
                "en-IN"
              )}
            </h1>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                fontSize: "13px",
              }}
            >
              Maximum potential deduction:
              ₹3,50,000
            </p>
          </div>

          {/* SECTION 80C */}

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
              Section 80C — Principal
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Principal Repaid
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  principalRepaid
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
                padding: "9px 0",
              }}
            >
              <span>
                80C Eligible Amount
              </span>

              <strong
                style={{
                  color: "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  eligible80CDeduction
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
                padding: "9px 0",
              }}
            >
              <span>
                Amount Above 80C Limit
              </span>

              <strong
                style={{
                  color:
                    excessPrincipal > 0
                      ? "#DC2626"
                      : "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  excessPrincipal
                ).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          </div>

          {/* SECTION 24(b) */}

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
              Section 24(b) — Interest
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Interest Paid
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  interestPaid
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
                padding: "9px 0",
              }}
            >
              <span>
                24(b) Eligible Amount
              </span>

              <strong
                style={{
                  color: "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  eligible24bDeduction
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
                padding: "9px 0",
              }}
            >
              <span>
                Interest Above Limit
              </span>

              <strong
                style={{
                  color:
                    excessInterest > 0
                      ? "#DC2626"
                      : "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  excessInterest
                ).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          </div>

          {/* TAX SAVING */}

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
            <h3
              style={{
                marginTop: 0,
                color: "#0F172A",
              }}
            >
              Estimated Tax Saving
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Marginal Tax Rate
              </span>

              <strong>
                {taxRate}%
              </strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "9px 0",
              }}
            >
              <span>
                Tax Saving Before Cess
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  estimatedTaxSaving
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
                Approx. Saving Including 4% Cess
              </span>

              <strong
                style={{
                  color: "#2563EB",
                }}
              >
                ₹{" "}
                {Math.round(
                  taxSavingWithCess
                ).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          </div>

          {/* IMPORTANT NOTE */}

          <div
            style={{
              background: "#FFF7ED",
              border:
                "1px solid #FED7AA",
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
            The ₹2 lakh Section 24(b) limit
            shown here applies to qualifying
            self-occupied property cases under
            the Old Tax Regime. Let-out property
            rules can differ. The actual tax
            benefit also depends on your complete
            tax position.
          </div>
        </>
      }

      /* =========================
         BENEFITS
      ========================= */

      benefits={
        <HomeLoanTaxBenefits />
      }

      /* =========================
         FAQ
      ========================= */

      faq={
        <HomeLoanTaxBenefitsFAQ />
      }

      /* =========================
         RELATED CALCULATORS
      ========================= */

      related={
        <HomeLoanTaxRelatedCalculators />
      }
    />
  );
}

export default HomeLoanTaxBenefitsCalculator;