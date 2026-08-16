import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-grid">

          {/* =========================================
              COLUMN 1 - BRAND
          ========================================= */}

          <div>

            <Link
              to="/"
              className="footer-logo-link"
            >
              <h2 className="footer-logo">
                FinanceWithCSR
              </h2>
            </Link>

            <p className="footer-text">
              Your one-stop destination for free financial
              calculators, investment planning tools and
              personal finance education designed especially
              for Indians.
            </p>

          </div>


          {/* =========================================
              COLUMN 2 - CALCULATORS
          ========================================= */}

          <div>

            <h3>Calculators</h3>

            <ul>

              <li>
                <Link to="/investments/sip">
                  SIP Calculator
                </Link>
              </li>

              <li>
                <Link to="/investments/fd">
                  FD Calculator
                </Link>
              </li>

              <li>
                <Link to="/loans/emi">
                  EMI Calculator
                </Link>
              </li>

              <li>
                <Link to="/planning">
                  Retirement Planner
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================================
              COLUMN 3 - RESOURCES
          ========================================= */}

          <div>

            <h3>Resources</h3>

            <ul>

              <li>
                <Link to="/blog">
                  Finance Blog
                </Link>
              </li>

              <li>
                <Link to="/tax">
                  Tax Planning
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

            </ul>

          </div>


          {/* =========================================
              COLUMN 4 - LEGAL
          ========================================= */}

          <div>

            <h3>Legal</h3>

            <ul>

              <li>
                <Link to="/">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/">
                  Disclaimer
                </Link>
              </li>

              <li>
                <Link to="/">
                  Cookie Policy
                </Link>
              </li>

            </ul>

          </div>

        </div>


        {/* =========================================
            FOOTER BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <p>
            © 2026 FinanceWithCSR. All Rights Reserved.
          </p>

          <p>
            Made with ❤️ in India
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;