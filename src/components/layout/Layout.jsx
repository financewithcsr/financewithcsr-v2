import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <>
      <Header />

      <main className="layout-main">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;