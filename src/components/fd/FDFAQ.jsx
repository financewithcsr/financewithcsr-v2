import { useState } from "react";
import "../calculators/SIPFAQ.css";

const faqs = [
  {
    question: "What is a Fixed Deposit (FD)?",
    answer:
      "A Fixed Deposit is a savings product offered by banks and financial institutions where you invest a lump sum amount for a fixed tenure at a fixed interest rate.",
  },
  {
    question: "How is FD interest calculated?",
    answer:
      "FD interest is calculated using simple or compound interest depending on the bank's compounding frequency and tenure.",
  },
  {
    question: "Is FD investment safe?",
    answer:
      "Yes. Bank Fixed Deposits are considered one of the safest investment options in India.",
  },
  {
    question: "Can I withdraw my FD before maturity?",
    answer:
      "Yes. Most banks allow premature withdrawal, although a penalty may apply.",
  },
  {
    question: "Is FD interest taxable?",
    answer:
      "Yes. Interest earned from Fixed Deposits is taxable as per your income tax slab.",
  },
];

function FDFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section">

      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>

          <button
            className="faq-question"
            onClick={() => setActive(active === index ? -1 : index)}
          >
            <span>{faq.question}</span>

            <span>{active === index ? "−" : "+"}</span>
          </button>

          {active === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}

        </div>
      ))}

    </section>
  );
}

export default FDFAQ;