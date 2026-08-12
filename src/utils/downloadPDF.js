import jsPDF from "jspdf";

export function downloadCalculatorPDF({
  title,
  monthlyInvestment,
  annualReturn,
  years,
  investedAmount,
  returns,
  totalValue,
}) {
  const pdf = new jsPDF();

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(22);
  pdf.text("FinanceWithCSR", 20, 20);

  pdf.setFontSize(16);
  pdf.text(title, 20, 35);

  pdf.setDrawColor(220);
  pdf.line(20, 42, 190, 42);

  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");

  pdf.text(
    `Monthly Investment : ₹ ${monthlyInvestment.toLocaleString("en-IN")}`,
    20,
    55
  );

  pdf.text(
    `Expected Return : ${annualReturn}%`,
    20,
    65
  );

  pdf.text(
    `Investment Period : ${years} Years`,
    20,
    75
  );

  pdf.line(20, 85, 190, 85);

  pdf.setFont("helvetica", "bold");

  pdf.text(
    `Invested Amount : ₹ ${Math.round(investedAmount).toLocaleString("en-IN")}`,
    20,
    100
  );

  pdf.text(
    `Estimated Returns : ₹ ${Math.round(returns).toLocaleString("en-IN")}`,
    20,
    112
  );

  pdf.text(
    `Total Value : ₹ ${Math.round(totalValue).toLocaleString("en-IN")}`,
    20,
    124
  );

  pdf.line(20, 140, 190, 140);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);

  pdf.text(
    "Generated using FinanceWithCSR",
    20,
    155
  );

  pdf.text(
    "https://financewithcsr.com",
    20,
    165
  );

  pdf.save(`${title}.pdf`);
}