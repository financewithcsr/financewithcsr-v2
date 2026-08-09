import { NavLink } from "react-router-dom";
import "../../styles/header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <NavLink to="/" className="logo">
          FinanceWithCSR
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/investments">Investments</NavLink>

          <NavLink to="/loans">Loans</NavLink>

          <NavLink to="/tax">Tax</NavLink>

          <NavLink to="/planning">Planning</NavLink>

          <NavLink to="/blog">Blog</NavLink>

          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-actions">
          <button className="search-btn">🔍 Search</button>

          <button className="login-btn">Login</button>
        </div>

        <button className="menu-btn">☰</button>
      </div>
    </header>
  );
}

export default Header;