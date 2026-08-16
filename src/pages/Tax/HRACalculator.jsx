import { useState } from "react";

import CalculatorLayout from "../../components/calculator/CalculatorLayout";
import InputSlider from "../../components/ui/InputSlider";

import HRABenefits from "./HRABenefits";
import HRAFAQ from "./HRAFAQ";
import HRARelatedCalculators from "./HRARelatedCalculators";

function HRACalculator() {
  const [basicSalary, setBasicSalary] =
    useState(600000);

  const [da, setDa] =
    useState(0);

  const [hraReceived, setHraReceived] =
    useState(240000);

  const [annualRent, setAnnualRent] =
    useState(240000);

  const [cityType, setCityType] =
    useState("non-metro");

  /* =========================
     SALARY FOR HRA
  ========================= */

  const salaryForHRA =
    basicSalary + da;

  /* =========================
     HRA CALCULATION
  ========================= */

  const actualHRA =
    hraReceived;

  const rentMinus10Percent =
    Math.max(
      0,
      annualRent -
        salaryForHRA * 0.10
    );

  const percentageLimit =
    salaryForHRA *
    (cityType === "metro"
      ? 0.50
      : 0.40);

  const hraExemption =
    Math.min(
      actualHRA,
      rentMinus10Percent,
      percentageLimit
    );

  const taxableHRA =
    Math.max(
      0,
      actualHRA -
        hraExemption
    );

  /* =========================
     MONTHLY VIEW
  ========================= */

  const monthlyRent =
    annualRent / 12;

  const monthlyHRA =
    hraReceived / 12;

  const monthlyExemption =
    hraExemption / 12;

  return (
    <CalculatorLayout
      title="HRA Calculator"
      description="Calculate your HRA exemption under Section 10(13A) and understand how much HRA may be taxable."

      /* =========================
         INPUTS
      ========================= */

      left={
        <>
          <InputSlider
            label="Annual Basic Salary"
            value={basicSalary}
            setValue={setBasicSalary}
            min={100000}
            max={10000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Annual Dearness Allowance"
            value={da}
            setValue={setDa}
            min={0}
            max={5000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Annual HRA Received"
            value={hraReceived}
            setValue={setHraReceived}
            min={0}
            max={5000000}
            step={1000}
            prefix="₹ "
          />

          <InputSlider
            label="Annual Rent Paid"
            value={annualRent}
            setValue={setAnnualRent}
            min={0}
            max={10000000}
            step={1000}
            prefix="₹ "
          />

          {/* =========================
             CITY TYPE
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
              City Type
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
                  setCityType("metro")
                }
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border:
                    cityType === "metro"
                      ? "2px solid #2563EB"
                      : "1px solid #CBD5E1",
                  background:
                    cityType === "metro"
                      ? "#EFF6FF"
                      : "#ffffff",
                  color: "#0F172A",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Metro
              </button>

              <button
                type="button"
                onClick={() =>
                  setCityType("non-metro")
                }
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border:
                    cityType ===
                    "non-metro"
                      ? "2px solid #2563EB"
                      : "1px solid #CBD5E1",
                  background:
                    cityType ===
                    "non-metro"
                      ? "#EFF6FF"
                      : "#ffffff",
                  color: "#0F172A",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Non-Metro
              </button>
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
              The 50% limit applies to
              specified metro cities.
              The 40% limit applies
              elsewhere.
            </p>
          </div>
        </>
      }

      /* =========================
         RESULTS
      ========================= */

      right={
        <>
          {/* HRA EXEMPTION */}

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
              HRA Exemption
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
                hraExemption
              ).toLocaleString(
                "en-IN"
              )}
            </h1>

            <p
              style={{
                margin: 0,
                color: "#64748B",
                fontSize: "14px",
              }}
            >
              Approx. ₹{" "}
              {Math.round(
                monthlyExemption
              ).toLocaleString(
                "en-IN"
              )}{" "}
              per month
            </p>
          </div>

          {/* HRA BREAKDOWN */}

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
              HRA Calculation Breakdown
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
                Actual HRA Received
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  actualHRA
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
                Rent − 10% of Salary
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  rentMinus10Percent
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
                {cityType === "metro"
                  ? "50%"
                  : "40%"}{" "}
                of Basic + DA
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  percentageLimit
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
                padding:
                  "14px 0 0",
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
                Exempt HRA
              </span>

              <strong
                style={{
                  color: "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  hraExemption
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
                Taxable HRA
              </span>

              <strong
                style={{
                  color: "#DC2626",
                }}
              >
                ₹{" "}
                {Math.round(
                  taxableHRA
                ).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          </div>

          {/* MONTHLY VIEW */}

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
              Monthly View
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
                Monthly Rent
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  monthlyRent
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
                padding: "8px 0",
              }}
            >
              <span>
                Monthly HRA
              </span>

              <strong>
                ₹{" "}
                {Math.round(
                  monthlyHRA
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
                padding: "8px 0",
              }}
            >
              <span>
                Monthly HRA Exemption
              </span>

              <strong
                style={{
                  color: "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  monthlyExemption
                ).toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          </div>

          {/* REGIME NOTE */}

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
            HRA exemption under Section
            10(13A) is available under
            the Old Tax Regime and is not
            available under the New Tax
            Regime.
          </div>
        </>
      }

      /* =========================
         BENEFITS
      ========================= */

      benefits={
        <HRABenefits />
      }

      /* =========================
         FAQ
      ========================= */

      faq={
        <HRAFAQ />
      }

      /* =========================
         RELATED CALCULATORS
      ========================= */

      related={
        <HRARelatedCalculators />
      }
    />
  );
}

export default HRACalculator;