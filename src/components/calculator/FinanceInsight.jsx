function FinanceInsight({
  yearlyInvestment = 0,
  annualReturn = 0,
  years = 0,
}) {
  const calculatePPF = (investment) => {
    let maturity = 0;

    for (let year = 0; year < years; year++) {
      maturity =
        (maturity + investment) *
        (1 + annualReturn / 100);
    }

    return maturity;
  };

  const currentMaturity =
    calculatePPF(yearlyInvestment);

  const maximumPPFContribution = 150000;

  const canIncrease =
    yearlyInvestment < maximumPPFContribution;

  const extraInvestment = canIncrease
    ? Math.min(
        1000,
        maximumPPFContribution - yearlyInvestment
      )
    : 0;

  const increasedInvestment =
    yearlyInvestment + extraInvestment;

  const increasedMaturity =
    calculatePPF(increasedInvestment);

  const additionalWealth =
    increasedMaturity - currentMaturity;

  return (
    <div
      style={{
        background: "#F8FBFF",
        border: "1px solid #BFDBFE",
        borderRadius: "18px",
        padding: "25px",
        boxShadow:
          "0 10px 25px rgba(37,99,235,0.08)",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            background: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            flexShrink: 0,
          }}
        >
          💡
        </div>

        <div>
          <div
            style={{
              color: "#2563EB",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              marginBottom: "4px",
            }}
          >
            FINANCEWITHCSR INSIGHT
          </div>

          <h2
            style={{
              margin: 0,
              color: "#0F172A",
              fontSize: "22px",
              lineHeight: 1.25,
            }}
          >
            What if you increase your PPF
            contribution?
          </h2>
        </div>
      </div>

      {/* DESCRIPTION */}

      <p
        style={{
          marginTop: "18px",
          color: "#64748B",
          fontSize: "14px",
          lineHeight: 1.7,
        }}
      >
        With an expected return of{" "}
        <strong>
          {annualReturn.toFixed(1)}%
        </strong>{" "}
        and an investment period of{" "}
        <strong>
          {years} years
        </strong>
        , increasing your yearly PPF contribution
        can increase your final maturity value.
      </p>

      {canIncrease ? (
        <>
          {/* ADDITIONAL WEALTH */}

          <div
            style={{
              color: "#16A34A",
              fontSize: "30px",
              fontWeight: 700,
              margin: "20px 0",
            }}
          >
            ₹{" "}
            {Math.round(
              additionalWealth
            ).toLocaleString("en-IN")}
          </div>

          <p
            style={{
              marginTop: "-10px",
              color: "#64748B",
              fontSize: "13px",
            }}
          >
            Approximate additional maturity value
            from increasing your yearly contribution
            by ₹{extraInvestment.toLocaleString("en-IN")}.
          </p>

          {/* COMPARISON */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "1fr auto 1fr",
              alignItems: "center",
              gap: "15px",
              background: "#ffffff",
              border: "1px solid #DBEAFE",
              borderRadius: "14px",
              padding: "18px",
              marginTop: "20px",
            }}
          >
            <div>
              <div
                style={{
                  color: "#64748B",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Current Yearly Investment
              </div>

              <strong
                style={{
                  color: "#0F172A",
                  fontSize: "18px",
                }}
              >
                ₹{" "}
                {yearlyInvestment.toLocaleString(
                  "en-IN"
                )}
              </strong>

              <div
                style={{
                  color: "#64748B",
                  fontSize: "12px",
                  marginTop: "8px",
                }}
              >
                Maturity
              </div>

              <strong
                style={{
                  color: "#0F172A",
                }}
              >
                ₹{" "}
                {Math.round(
                  currentMaturity
                ).toLocaleString("en-IN")}
              </strong>
            </div>

            <div
              style={{
                fontSize: "28px",
                color: "#2563EB",
                fontWeight: 700,
              }}
            >
              →
            </div>

            <div>
              <div
                style={{
                  color: "#64748B",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                With ₹
                {extraInvestment.toLocaleString(
                  "en-IN"
                )} Extra / Year
              </div>

              <strong
                style={{
                  color: "#0F172A",
                  fontSize: "18px",
                }}
              >
                ₹{" "}
                {increasedInvestment.toLocaleString(
                  "en-IN"
                )}
              </strong>

              <div
                style={{
                  color: "#64748B",
                  fontSize: "12px",
                  marginTop: "8px",
                }}
              >
                Maturity
              </div>

              <strong
                style={{
                  color: "#16A34A",
                }}
              >
                ₹{" "}
                {Math.round(
                  increasedMaturity
                ).toLocaleString("en-IN")}
              </strong>
            </div>
          </div>
        </>
      ) : (
        /* MAXIMUM CONTRIBUTION MESSAGE */

        <div
          style={{
            marginTop: "20px",
            background: "#FFF7ED",
            border: "1px solid #FED7AA",
            borderRadius: "14px",
            padding: "18px",
          }}
        >
          <strong
            style={{
              display: "block",
              color: "#C2410C",
              marginBottom: "6px",
            }}
          >
            You are already at the PPF contribution
            limit.
          </strong>

          <p
            style={{
              margin: 0,
              color: "#7C2D12",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            Your yearly investment is ₹
            {yearlyInvestment.toLocaleString("en-IN")}.
            The maximum yearly PPF contribution
            considered here is ₹1,50,000.
          </p>
        </div>
      )}

      {/* FOOTNOTE */}

      <p
        style={{
          marginTop: "18px",
          marginBottom: 0,
          color: "#64748B",
          fontSize: "12px",
          lineHeight: 1.6,
        }}
      >
        This is an illustrative calculation. Actual
        PPF returns depend on the applicable interest
        rate and PPF rules.
      </p>
    </div>
  );
}

export default FinanceInsight;