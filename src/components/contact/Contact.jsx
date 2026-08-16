import { useState } from "react";
import "./Contact.css";

const FORMSPREE_ENDPOINT =
  "https://formspree.io/f/xzepanve";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setStatus("error");
    }
  };

  return (
    <main className="contact-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="contact-hero">

        <div className="contact-container">

          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h1>
            Let's Talk About
            <span> Money & Finance.</span>
          </h1>

          <p>
            Have a question, suggestion, feedback or
            collaboration idea? We'd love to hear from you.
          </p>

        </div>

      </section>


      {/* =========================================
          CONTACT SECTION
      ========================================= */}

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-grid">

            {/* =====================================
                LEFT SIDE
            ===================================== */}

            <div className="contact-info">

              <span className="contact-label">
                CONTACT FINANCEWITHCSR
              </span>

              <h2>
                We're here to help.
              </h2>

              <p>
                Whether you have a question about one of
                our calculators, want to share feedback or
                would like to work with FinanceWithCSR,
                you can reach out to us.
              </p>


              <div className="contact-info-list">

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    ✉
                  </div>

                  <div>
                    <span>
                      Email
                    </span>

                    <strong>
                      support@financewithcsr.com
                    </strong>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    💬
                  </div>

                  <div>
                    <span>
                      General Enquiries
                    </span>

                    <strong>
                      Questions, feedback & suggestions
                    </strong>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    🤝
                  </div>

                  <div>
                    <span>
                      Collaborations
                    </span>

                    <strong>
                      Brand & business enquiries
                    </strong>
                  </div>

                </div>

              </div>

            </div>


            {/* =====================================
                RIGHT SIDE - FORM
            ===================================== */}

            <div className="contact-form-card">

              <h2>
                Send us a message
              </h2>

              <p className="contact-form-subtitle">
                Fill in the details below and we'll get
                back to you.
              </p>


              {/* SUCCESS MESSAGE */}

              {status === "success" && (
                <div className="contact-success-message">
                  <strong>
                    ✓ Message sent successfully!
                  </strong>

                  <span>
                    Thank you for contacting FinanceWithCSR.
                    We'll get back to you soon.
                  </span>
                </div>
              )}


              {/* ERROR MESSAGE */}

              {status === "error" && (
                <div className="contact-error-message">
                  <strong>
                    Something went wrong.
                  </strong>

                  <span>
                    Please try again in a moment.
                  </span>
                </div>
              )}


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME + EMAIL */}

                <div className="contact-form-row">

                  <div className="contact-field">

                    <label htmlFor="contact-name">
                      Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label htmlFor="contact-email">
                      Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />

                  </div>

                </div>


                {/* SUBJECT */}

                <div className="contact-field">

                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    required
                  />

                </div>


                {/* MESSAGE */}

                <div className="contact-field">

                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Write your message..."
                    required
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={status === "submitting"}
                >

                  {status === "submitting" ? (
                    <>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BOTTOM MESSAGE
      ========================================= */}

      <section className="contact-bottom">

        <div className="contact-container">

          <div className="contact-bottom-card">

            <span className="contact-bottom-mark">
              FINANCEWITHCSR
            </span>

            <h2>
              Your money. Your decisions.
              <br />
              Make them with confidence.
            </h2>

            <p>
              Nuvvu money ni handle cheyyakapothe,
              money ninnu handle chesthundi.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;