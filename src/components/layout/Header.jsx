import { NavLink } from "react-router-dom";
import "../../styles/header.css";

import financewithcsrLogo from "../../assets/financewithcsr-logo.png";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        {/* =========================
            BRAND LOGO
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
            aria-label="Search"
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
  );
}

export default Header;