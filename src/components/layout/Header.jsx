import { NavLink } from "react-router-dom";
import "../../styles/header.css";

function Header() {
  return (
    <header className="site-header">

      <div className="header">

        <NavLink to="/" className="logo">
          Finance<span>WithCSR</span>
        </NavLink>

        <nav className="nav-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/investments">
            Investments
          </NavLink>

          <NavLink to="/loans">
            Loans
          </NavLink>

          <NavLink to="/tax">
            Tax
          </NavLink>

          <NavLink to="/planning">
            Planning
          </NavLink>

          <NavLink to="/blog">
            Blog
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        <div className="header-actions">

          <button className="search-btn">
            🔍 Search
          </button>

          <NavLink
            to="/investments/sip"
            className="login-btn"
          >
            Start Now
          </NavLink>

        </div>

      </div>

    </header>
  );
}

export default Header;