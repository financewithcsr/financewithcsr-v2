import { NavLink } from "react-router-dom";
import "../../styles/header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        {/* Logo */}
        <NavLink to="/" className="brand-logo">
          <span className="brand-finance">
            Finance
          </span>

          <span className="brand-csr">
            WithCSR
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="nav-links">

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

        {/* Header Actions */}
        <div className="header-actions">

          <button
            className="search-btn"
            type="button"
          >
            <span className="search-icon">
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
            Start Now
          </NavLink>

        </div>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          type="button"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Header;