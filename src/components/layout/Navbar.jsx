import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

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

          <NavLink to="/insurance">
            Insurance
          </NavLink>

          <NavLink to="/blog">
            Blog
          </NavLink>

        </nav>

        <NavLink
          to="/investments/sip"
          className="nav-btn"
        >
          Start Calculating
        </NavLink>

      </div>

    </header>
  );
}

export default Navbar;