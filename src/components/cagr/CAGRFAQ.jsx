import { useState } from "react";
import "../calculators/SIPFAQ.css";

const faqs = [
  {
    question: "What is CAGR?",
    answer:
      "CAGR (Compound Annual Growth Rate) is the average annual rate at which an investment grows over a period, assuming profits are reinvested each year.",
  },
  {
    question: "Why is CAGR important?",
    answer:
      "CAGR provides a standardized way to compare the performance of different investments over time.",
  },
  {
    question: "Is CAGR the same as absolute return?",
    answer:
      "No. Absolute return measures total growth, while CAGR shows the average annual growth rate over multiple years.",
  },
  {
    question: "Can CAGR be negative?",
    answer:
      "Yes. If the final value of an investment is lower than its initial value, the CAGR will be negative.",
  },
  {
    question: "Does CAGR guarantee future returns?",
    answer:
      "No. CAGR is based on historical or estimated values and does not guarantee future investment performance.",
  },
];

function CAGRFAQ() {
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

export default CAGRFAQ;