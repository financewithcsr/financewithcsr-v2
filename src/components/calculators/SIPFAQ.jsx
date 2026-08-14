import { useState } from "react";
import "./SIPFAQ.css";

const faqs = [
  {
    question: "What is a SIP Calculator?",
    answer:
      "A SIP Calculator helps estimate the future value of your monthly mutual fund investments based on the investment amount, expected annual return, and investment period."
  },
  {
    question: "How does a SIP Calculator work?",
    answer:
      "It uses the standard SIP formula to calculate the estimated maturity amount by considering monthly investments, expected annual returns, and the total investment duration."
  },
  {
    question: "Is SIP better than Fixed Deposit (FD)?",
    answer:
      "SIPs invest in market-linked mutual funds and have the potential to generate higher long-term returns, while Fixed Deposits offer fixed and guaranteed returns with lower risk."
  },
  {
    question: "Can I increase my SIP amount later?",
    answer:
      "Yes. Most mutual fund companies allow investors to increase, decrease, pause, or stop their SIP at any time according to their financial goals."
  },
  {
    question: "What is the minimum amount to start a SIP?",
    answer:
      "Many mutual funds allow you to start investing with as little as ₹100 or ₹500 per month depending on the fund."
  },
  {
    question: "Does this SIP Calculator guarantee returns?",
    answer:
      "No. The calculator provides estimated values based on assumed annual returns. Actual returns depend on market performance."
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

export default SIPFAQ;