import { useState } from "react";
import "../ppf/SIPFAQ.css";

function RDFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a Recurring Deposit (RD)?",
      answer:
        "A Recurring Deposit is a savings scheme where you deposit a fixed amount every month for a chosen period and earn interest on your deposits.",
    },
    {
      question: "How is RD maturity amount calculated?",
      answer:
        "The maturity amount depends on your monthly deposit, interest rate, and RD tenure. This calculator provides an estimated maturity value based on the information you enter.",
    },
    {
      question: "Can I change my monthly RD deposit?",
      answer:
        "Generally, the monthly installment is fixed when you open an RD account. The exact rules may vary depending on the bank or financial institution.",
    },
    {
      question: "Is RD interest taxable?",
      answer:
        "RD interest is generally taxable according to the applicable income-tax rules. The actual tax impact depends on your total income and applicable tax provisions.",
    },
    {
      question: "Is RD a safe investment?",
      answer:
        "RDs are generally considered a low-risk savings option because the interest rate and maturity terms are known in advance. However, the exact terms depend on the bank or institution.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            >
              <span>{faq.question}</span>

              <span>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default RDFAQ;