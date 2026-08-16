import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";

import financewithcsrLogo from "../../assets/financewithcsr-logo.png";

const searchItems = [
  {
    title: "Investment Calculators",
    description: "SIP, FD, RD, PPF, Lumpsum and CAGR calculators",
    path: "/investments",
    keywords: "investment sip fd rd ppf lumpsum cagr calculator",
    icon: "📈",
  },
  {
    title: "SIP Calculator",
    description: "Calculate future value of monthly SIP investments",
    path: "/investments/sip",
    keywords: "sip mutual fund investment calculator",
    icon: "📊",
  },
  {
    title: "FD Calculator",
    description: "Calculate fixed deposit maturity amount",
    path: "/investments/fd",
    keywords: "fd fixed deposit bank calculator",
    icon: "🏦",
  },
  {
    title: "RD Calculator",
    description: "Calculate recurring deposit maturity value",
    path: "/investments/rd",
    keywords: "rd recurring deposit calculator",
    icon: "💳",
  },
  {
    title: "PPF Calculator",
    description: "Plan your long-term PPF savings",
    path: "/investments/ppf",
    keywords: "ppf public provident fund savings calculator",
    icon: "🛡️",
  },
  {
    title: "Lumpsum Calculator",
    description: "Calculate returns on one-time investments",
    path: "/investments/lumpsum",
    keywords: "lumpsum one time investment calculator",
    icon: "💰",
  },
  {
    title: "CAGR Calculator",
    description: "Calculate annualized investment growth",
    path: "/investments/cagr",
    keywords: "cagr annual growth investment calculator",
    icon: "📈",
  },
  {
    title: "Loan Calculators",
    description: "Explore loan and EMI calculators",
    path: "/loans",
    keywords: "loan emi home loan car loan personal loan",
    icon: "🏠",
  },
  {
    title: "EMI Calculator",
    description: "Calculate your monthly loan EMI",
    path: "/loans/emi",
    keywords: "emi loan monthly installment calculator",
    icon: "🧮",
  },
  {
    title: "Home Loan Calculator",
    description: "Calculate home loan EMI and interest",
    path: "/loans/home-loan",
    keywords: "home loan housing loan emi calculator",
    icon: "🏡",
  },
  {
    title: "Car Loan Calculator",
    description: "Calculate car loan EMI and repayment",
    path: "/loans/car-loan",
    keywords: "car auto vehicle loan emi calculator",
    icon: "🚗",
  },
  {
    title: "Personal Loan Calculator",
    description: "Calculate personal loan EMI",
    path: "/loans/personal-loan",
    keywords: "personal loan emi calculator",
    icon: "💵",
  },
  {
    title: "Tax Planning",
    description: "Explore tax calculators and tax planning tools",
    path: "/tax",
    keywords: "tax income tax tax planning calculator",
    icon: "⚖️",
  },
  {
    title: "Income Tax Calculator",
    description: "Estimate your income tax liability",
    path: "/tax/income-tax",
    keywords: "income tax itr tax calculator salary",
    icon: "🧾",
  },
  {
    title: "HRA Calculator",
    description: "Calculate your HRA exemption",
    path: "/tax/hra",
    keywords: "hra house rent allowance tax exemption",
    icon: "🏠",
  },
  {
    title: "80C Tax Saving Calculator",
    description: "Estimate tax savings under Section 80C",
    path: "/tax/80c",
    keywords: "80c tax saving investment deduction",
    icon: "💰",
  },
  {
    title: "Home Loan Tax Benefits",
    description: "Understand tax benefits available on home loans",
    path: "/tax/home-loan-benefits",
    keywords: "home loan tax benefit deduction section 24 80c",
    icon: "🏡",
  },
  {
    title: "Planning",
    description: "Financial planning tools",
    path: "/planning",
    keywords: "financial planning retirement planning",
    icon: "🎯",
  },
  {
    title: "Finance Blog",
    description: "Read personal finance articles and guides",
    path: "/blog",
    keywords: "blog finance articles money personal finance",
    icon: "📰",
  },
  {
    title: "Contact",
    description: "Get in touch with FinanceWithCSR",
    path: "/contact",
    keywords: "contact support help",
    icon: "📩",
  },
  {
    title: "About FinanceWithCSR",
    description: "Learn more about FinanceWithCSR",
    path: "/about",
    keywords: "about finance with csr company",
    icon: "ℹ️",
  },
];

function Header() {
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const openSearch = () => {
    setSearchOpen(true);
  };

  const handleResultClick = (path) => {
    closeSearch();
    navigate(path);
  };

  const filteredResults = searchItems.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    );
  });

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-container">

          {/* =========================
              BRAND
          ========================= */}

          <NavLink
            to="/"
            className="brand-logo"
            aria-label="Finance with CSR Home"
          >
            <img
              src={financewithcsrLogo}
              alt="Finance with CSR"
              className="brand-logo-image"
            />
          </NavLink>

          {/* =========================
              NAVIGATION
          ========================= */}

          <nav
            className="nav-links"
            aria-label="Main navigation"
          >
            <NavLink
              to="/investments"
              className="nav-link"
            >
              Investments
            </NavLink>

            <NavLink
              to="/loans"
              className="nav-link"
            >
              Loans
            </NavLink>

            <NavLink
              to="/tax"
              className="nav-link"
            >
              Tax
            </NavLink>

            <NavLink
              to="/planning"
              className="nav-link"
            >
              Planning
            </NavLink>

            <NavLink
              to="/blog"
              className="nav-link"
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
            >
              Contact
            </NavLink>
          </nav>

          {/* =========================
              HEADER ACTIONS
          ========================= */}

          <div className="header-actions">

            <button
              className="search-btn"
              type="button"
              onClick={openSearch}
              aria-label="Search FinanceWithCSR"
            >
              <span
                className="search-icon"
                aria-hidden="true"
              >
                ⌕
              </span>

              <span>
                Search
              </span>
            </button>

            <NavLink
              to="/investments"
              className="start-btn"
            >
              <span>Start Now</span>

              <span
                className="start-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </NavLink>

          </div>

          {/* =========================
              MOBILE MENU
          ========================= */}

          <button
            className="menu-btn"
            type="button"
            aria-label="Open menu"
          >
            <span>☰</span>
          </button>

        </div>
      </header>

      {/* =========================
          SEARCH OVERLAY
      ========================= */}

      {searchOpen && (
        <div
          className="search-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeSearch();
            }
          }}
        >
          <div className="search-modal">

            {/* Search Header */}

            <div className="search-modal-header">

              <div className="search-modal-title">
                <span className="search-modal-icon">
                  ⌕
                </span>

                <div>
                  <h2>
                    Search FinanceWithCSR
                  </h2>

                  <p>
                    Find calculators, tools and financial resources
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="search-close-btn"
                onClick={closeSearch}
                aria-label="Close search"
              >
                ×
              </button>

            </div>

            {/* Search Input */}

            <div className="search-input-wrapper">

              <span
                className="search-input-icon"
                aria-hidden="true"
              >
                ⌕
              </span>

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search SIP, tax, EMI, FD, PPF..."
                autoFocus
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

            </div>

            {/* Search Results */}

            <div className="search-results">

              {!searchQuery && (
                <div className="search-results-label">
                  Popular searches
                </div>
              )}

              {searchQuery && filteredResults.length > 0 && (
                <div className="search-results-label">
                  Search results
                </div>
              )}

              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    className="search-result"
                    onClick={() =>
                      handleResultClick(item.path)
                    }
                  >
                    <span className="search-result-icon">
                      {item.icon}
                    </span>

                    <span className="search-result-content">

                      <strong>
                        {item.title}
                      </strong>

                      <small>
                        {item.description}
                      </small>

                    </span>

                    <span className="search-result-arrow">
                      →
                    </span>
                  </button>
                ))
              ) : (
                <div className="search-no-results">

                  <div className="search-no-results-icon">
                    🔍
                  </div>

                  <h3>
                    No results found
                  </h3>

                  <p>
                    Try searching for SIP, tax, EMI,
                    FD, PPF or loans.
                  </p>

                </div>
              )}

            </div>

            {/* Search Footer */}

            <div className="search-modal-footer">

              <span>
                Press <strong>Esc</strong> to close
              </span>

              <span>
                {filteredResults.length} result
                {filteredResults.length !== 1 ? "s" : ""}
              </span>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Header;