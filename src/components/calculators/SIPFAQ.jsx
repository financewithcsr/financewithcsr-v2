import { useState } from "react";
import "./SIPFAQ.css";

const faqs = [
  {
    question: "What is SIP?",
    answer:
      "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds. It helps build wealth through disciplined investing."
  },
  {
    question: "Is SIP better than FD?",
    answer:
      "SIPs invest in market-linked mutual funds and may provide higher long-term returns, while Fixed Deposits offer stable but generally lower returns."
  },
  {
    question: "Can I stop my SIP anytime?",
    answer:
      "Yes. Most mutual fund SIPs can be stopped, paused, or modified without any penalty."
  },
  {
    question: "What happens if I miss one SIP installment?",
    answer:
      "Missing one installment generally does not cancel your SIP. The fund house may simply skip that month's investment."
  },
  {
    question: "How much should I invest in SIP?",
    answer:
      "Choose an amount based on your income, expenses, financial goals, and investment horizon. Even small monthly investments can grow over time."
  }
];

function SIPFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq-section">

      <h2>Frequently Asked Questions</h2>

      {faqs.map((faq, index) => (

        <div className="faq-item" key={index}>

          <button
            className="faq-question"
            onClick={() =>
              setActive(active === index ? -1 : index)
            }
          >
            <span>{faq.question}</span>

            <span>
              {active === index ? "−" : "+"}
            </span>

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

export default SIPFAQ;