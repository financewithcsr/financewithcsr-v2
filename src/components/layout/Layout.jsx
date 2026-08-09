import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "80vh",
          padding: "40px 60px",
          background: "#F8FAFC",
        }}
      >
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;