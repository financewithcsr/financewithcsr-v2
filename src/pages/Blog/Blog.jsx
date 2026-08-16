import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  const categories = [
    {
      title: "Investments",
      description:
        "Understand SIPs, mutual funds, PPF, FD, RD and long-term wealth creation.",
      path: "/investments",
    },
    {
      title: "Loans",
      description:
        "Learn about EMIs, home loans, car loans, personal loans and borrowing decisions.",
      path: "/loans",
    },
    {
      title: "Tax",
      description:
        "Understand income tax, tax-saving options, HRA and different tax regimes.",
      path: "/tax",
    },
    {
      title: "Personal Finance",
      description:
        "Simple ideas to manage salary, expenses, savings, insurance and financial goals.",
      path: "/planning",
    },
  ];

  const articles = [
    {
      category: "PERSONAL FINANCE",
      title: "Where Does Your Salary Actually Go?",
      description:
        "A simple way to understand your income, expenses, savings and financial priorities.",
    },
    {
      category: "INVESTMENTS",
      title: "SIP vs FD: Which One Should You Choose?",
      description:
        "Understand the basic difference between market-linked investments and fixed returns.",
    },
    {
      category: "TAX",
      title: "Tax Planning Mistakes Salaried Employees Make",
      description:
        "Common mistakes that can affect your tax planning and financial decisions.",
    },
    {
      category: "LOANS",
      title: "Before Taking a Loan, Check These Numbers",
      description:
        "The important numbers you should understand before committing to a loan.",
    },
    {
      category: "PLANNING",
      title: "How Much Emergency Fund Do You Really Need?",
      description:
        "Learn why an emergency fund matters and how to think about your target amount.",
    },
    {
      category: "WEALTH",
      title: "Why Starting Early Matters More Than You Think",
      description:
        "Understand how time can make a difference when you are building long-term wealth.",
    },
  ];

  return (
    <main className="blog-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="blog-hero">

        <div className="blog-container">

          <span className="blog-eyebrow">
            FINANCEWITHCSR BLOG
          </span>

          <h1>
            Make Better Money
            <span>Decisions.</span>
          </h1>

          <p>
            Simple, practical finance content to help you
            understand your money, make informed decisions
            and build a stronger financial future.
          </p>

        </div>

      </section>


      {/* =========================================
          CATEGORIES
      ========================================= */}

      <section className="blog-categories">

        <div className="blog-container">

          <div className="blog-section-heading">

            <span className="blog-label">
              EXPLORE TOPICS
            </span>

            <h2>
              Finance explained simply.
            </h2>

            <p>
              Choose a topic and explore practical
              information designed for everyday financial
              decisions.
            </p>

          </div>


          <div className="blog-category-grid">

            {categories.map((category) => (
              <Link
                to={category.path}
                className="blog-category-card"
                key={category.title}
              >

                <div className="blog-category-arrow">
                  →
                </div>

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.description}
                </p>

                <span className="blog-category-link">
                  Explore topic
                </span>

              </Link>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          LATEST ARTICLES
      ========================================= */}

      <section className="blog-articles">

        <div className="blog-container">

          <div className="blog-section-heading">

            <span className="blog-label">
              LATEST ARTICLES
            </span>

            <h2>
              Money topics worth knowing.
            </h2>

            <p>
              Easy-to-understand articles covering
              investments, taxes, loans and personal finance.
            </p>

          </div>


          <div className="blog-article-grid">

            {articles.map((article) => (
              <article
                className="blog-article-card"
                key={article.title}
              >

                <span className="blog-article-category">
                  {article.category}
                </span>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.description}
                </p>

                <button
                  type="button"
                  className="blog-read-link"
                >
                  Read Article
                  <span>→</span>
                </button>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="blog-cta">

        <div className="blog-container">

          <div className="blog-cta-card">

            <span className="blog-cta-mark">
              FINANCEWITHCSR
            </span>

            <h2>
              Your money deserves
              <br />
              better decisions.
            </h2>

            <p>
              Explore our calculators and planning tools
              to put your financial knowledge into action.
            </p>

            <Link
              to="/investments"
              className="blog-cta-button"
            >
              Explore Calculators
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Blog;