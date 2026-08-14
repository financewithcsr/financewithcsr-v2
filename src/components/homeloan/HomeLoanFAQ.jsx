import { useState } from "react";
import "./HomeLoanFAQ.css";

function HomeLoanFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a Home Loan EMI?",
      answer:
        "EMI (Equated Monthly Installment) is the fixed amount you pay every month towards repaying your home loan. It consists of both principal and interest.",
    },
    {
      question: "How is Home Loan EMI calculated?",
      answer:
        "EMI is calculated using the loan amount, interest rate and loan tenure. This calculator uses the standard EMI formula used by banks.",
    },
    {
      question: "Can I reduce my Home Loan EMI?",
      answer:
        "Yes. You can reduce your EMI by choosing a longer tenure, getting a lower interest rate or making part-prepayments whenever possible.",
    },
    {
      question: "Does prepayment reduce interest?",
      answer:
        "Yes. Making prepayments reduces your outstanding principal, which lowers the total interest paid over the loan tenure.",
    },
    {
      question: "Is this calculator accurate?",
      answer:
        "Yes. The EMI calculation follows the standard mathematical formula used by most banks and financial institutions.",
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
              <span>{openIndex === index ? "−" : "+"}</span>
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

export default HomeLoanFAQ;