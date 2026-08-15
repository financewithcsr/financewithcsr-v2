import { useState } from "react";

import "./LumpsumFAQ.css";

function LumpsumFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a lumpsum investment?",
      answer:
        "A lumpsum investment means investing a large amount of money at one time instead of investing it periodically.",
    },
    {
      question: "How does the Lumpsum Calculator work?",
      answer:
        "The calculator uses your investment amount, expected annual return and investment period to estimate the future value of your investment.",
    },
    {
      question: "Can I manually enter the investment amount?",
      answer:
        "Yes. You can manually enter the investment amount and change the expected return and investment period.",
    },
    {
      question: "What is the power of compounding?",
      answer:
        "Compounding means your returns can generate additional returns when the investment remains invested over time.",
    },
    {
      question: "Are the calculator returns guaranteed?",
      answer:
        "No. The calculator provides an estimate based on the return rate entered by you. Actual investment returns may be different.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="lumpsum-faq">

      <div className="lumpsum-faq-header">
        <h2>Frequently Asked Questions</h2>

        <p>
          Common questions about lumpsum investments and this calculator.
        </p>
      </div>

      <div className="lumpsum-faq-list">

        {faqs.map((faq, index) => (

          <div
            className={`lumpsum-faq-item ${
              openIndex === index ? "open" : ""
            }`}
            key={faq.question}
          >

            <button
              type="button"
              className="lumpsum-faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span className="lumpsum-faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="lumpsum-faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default LumpsumFAQ;