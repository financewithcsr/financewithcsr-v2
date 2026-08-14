import { useState } from "react";

import "../calculators/SIPFAQ.css";

const faqs = [
  {
    question: "What is a Lumpsum Investment?",
    answer:
      "A lumpsum investment is a one-time investment made into a mutual fund or any other investment product instead of investing monthly.",
  },
  {
    question: "Who should invest through Lumpsum?",
    answer:
      "It is suitable for investors who have surplus money like bonuses, inheritance, maturity proceeds or savings available for immediate investment.",
  },
  {
    question: "Is Lumpsum better than SIP?",
    answer:
      "Both have advantages. SIP helps average market volatility, while lumpsum can generate higher returns when invested during favorable market conditions.",
  },
  {
    question: "Can I withdraw my investment anytime?",
    answer:
      "Yes. Most mutual funds allow redemption at any time, although exit loads and taxes may apply depending on the scheme.",
  },
  {
    question: "Does a Lumpsum Calculator guarantee returns?",
    answer:
      "No. The calculator provides estimates based on expected annual returns. Actual returns depend on market performance.",
  },
];

function LumpsumFAQ() {
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

export default LumpsumFAQ;