function BlogSection() {
  const blogs = [
    {
      title: "How to Start SIP in 2026",
      description: "A beginner-friendly guide to start investing through SIP.",
    },
    {
      title: "Old Tax vs New Tax Regime",
      description: "Compare both tax regimes and choose the right one.",
    },
    {
      title: "Emergency Fund Explained",
      description: "Why every family should have an emergency fund.",
    },
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Finance Articles</h2>

        <p className="section-subtitle">
          Learn finance with simple and practical guides.
        </p>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.title}>
              <div className="blog-image"></div>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button>Read Article →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;