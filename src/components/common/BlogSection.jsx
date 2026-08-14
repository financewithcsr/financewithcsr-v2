import "./BlogSection.css";

const blogs = [
  {
    category: "INVESTMENT",
    title: "How to Build ₹1 Crore with SIP",
    description:
      "Learn how small monthly investments can grow into a ₹1 Crore corpus with disciplined investing.",
    date: "5 min read",
  },
  {
    category: "LOANS",
    title: "5 Home Loan Mistakes to Avoid",
    description:
      "Avoid common mistakes while taking a home loan and save lakhs in interest payments.",
    date: "6 min read",
  },
  {
    category: "TAX",
    title: "New Tax Regime Explained",
    description:
      "Understand income tax basics and make better decisions for your savings.",
    date: "8 min read",
  },
];

function BlogSection() {
  return (
    <section className="blog">
      <div className="blog-container">

        <div className="section-title">
          <span>LATEST ARTICLES</span>

          <h2>
            Learn Personal Finance
            <br />
            The Easy Way
          </h2>

          <p>
            Read practical finance guides written in simple language for
            investors, salaried employees and families.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>

              <span className="blog-category">
                {blog.category}
              </span>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <div className="blog-footer">
                <span>{blog.date}</span>

                <button>
                  Read Article →
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="blog-btn">
          <button>
            View All Articles →
          </button>
        </div>

      </div>
    </section>
  );
}

export default BlogSection;