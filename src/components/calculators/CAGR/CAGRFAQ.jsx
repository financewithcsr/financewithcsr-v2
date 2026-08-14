import "./SIPFAQ.css";

const faqs = [
  {
    question: "What is a Lumpsum Investment?",
    answer:
      "A lumpsum investment means investing a large amount of money at one time instead of investing monthly through SIP.",
  },
  {
    question: "How is Lumpsum different from SIP?",
    answer:
      "In SIP, you invest a fixed amount every month. In a lumpsum investment, you invest the entire amount at once.",
  },
  {
    question: "Who should choose a Lumpsum Investment?",
    answer:
      "Investors who have surplus funds like bonuses, inheritance, maturity proceeds, or savings can consider lumpsum investments for long-term wealth creation.",
  },
  {
    question: "Can I withdraw my investment anytime?",
    answer:
      "Yes. Most mutual fund lumpsum investments can be redeemed anytime, although exit loads and taxes may apply depending on the scheme.",
  },
  {
    question: "Does this calculator guarantee returns?",
    answer:
      "No. This calculator provides estimated values based on the expected annual return entered by you. Actual returns may vary.",
  },
];

function LumpsumFAQ() {
  return (
    <section className="faq-section">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">

        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <h3>{faq.question}</h3>

            <p>{faq.answer}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default LumpsumFAQ;