import "./ShareResults.css";
import { downloadCalculatorPDF } from "../../utils/downloadPDF";

function ShareResults({
  title,
  monthlyInvestment,
  annualReturn,
  years,
  investedAmount,
  returns,
  totalValue,
}) {

  const shareText =
    `${title} - Calculate your investments using FinanceWithCSR`;

  const handleShare = async () => {

    if (navigator.share) {

      try {

        await navigator.share({
          title,
          text: shareText,
          url: window.location.href,
        });

      } catch (err) {}

    } else {

      navigator.clipboard.writeText(window.location.href);

      alert("Calculator link copied!");

    }

  };

  const handlePrint = () => {
    window.print();
  };

  const handlePDF = () => {

    downloadCalculatorPDF({

      title,

      monthlyInvestment,

      annualReturn,

      years,

      investedAmount,

      returns,

      totalValue,

    });

  };

  return (

    <div className="share-results">

      <button
        className="pdf-btn"
        onClick={handlePDF}
      >
        📄 Download PDF
      </button>

      <button
        className="share-btn"
        onClick={handleShare}
      >
        📤 Share
      </button>

      <button
        className="print-btn"
        onClick={handlePrint}
      >
        🖨️ Print
      </button>

    </div>

  );

}

export default ShareResults;