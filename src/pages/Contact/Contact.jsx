function Contact() {
  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <h1>Contact Us</h1>

      <p>
        We'd love to hear from you. Reach out for feedback, partnerships,
        calculator suggestions, or business inquiries.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
          maxWidth: "600px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "15px",
            border: "1px solid #D1D5DB",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "15px",
            border: "1px solid #D1D5DB",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        />

        <textarea
          placeholder="Your Message"
          rows="6"
          style={{
            padding: "15px",
            border: "1px solid #D1D5DB",
            borderRadius: "10px",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <button
          style={{
            width: "200px",
            padding: "15px",
            background: "#2563EB",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;