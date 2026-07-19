import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "OPERATIONS", path: "/operations" },
    { name: "MINING", path: "/mining" },
    { name: "INVESTMENTS", path: "/investments" },
    { name: "NEWS", path: "/news" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "90px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 70px",
        zIndex: 9999,
        transition: "0.4s ease",
        background: scrolled
          ? "rgba(2,18,37,0.96)"
          : "rgba(2,18,37,0.40)",
        backdropFilter: "blur(12px)",
        boxSizing: "border-box",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#D4AF37",
          fontSize: "2rem",
          fontWeight: "700",
          letterSpacing: "2px",
          whiteSpace: "nowrap",
        }}
      >
        ZINA COMMODITIES
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "#fff",
              fontWeight: "600",
              fontSize: "15px",
              letterSpacing: "1px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#D4AF37")}
            onMouseLeave={(e) => (e.target.style.color = "#fff")}
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="/verify"
          style={{
            background: "#D4AF37",
            color: "#021225",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          VERIFY
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;