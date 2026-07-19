import { Link } from "react-router-dom";

function CTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#021225,#0a1d35)",
        padding: "120px 8%",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontSize: "3.5rem",
          marginBottom: "25px",
          lineHeight: "1.2",
        }}
      >
        Partner With
        <br />
        <span style={{ color: "#D4AF37" }}>
          Africa's Next Generation Mining Company
        </span>
      </h2>

      <p
        style={{
          maxWidth: "850px",
          margin: "0 auto 50px",
          color: "#cccccc",
          lineHeight: "1.9",
          fontSize: "1.15rem",
        }}
      >
        Whether you're seeking long-term mineral supply, strategic investment
        opportunities, joint venture partnerships, or responsible sourcing,
        Zina Commodities delivers world-class mining expertise backed by
        operational excellence across Africa.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/contact"
          style={{
            background: "#D4AF37",
            color: "#021225",
            padding: "18px 40px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Discuss a Mining Partnership
        </Link>

        <Link
          to="/contact"
          style={{
            border: "2px solid #D4AF37",
            color: "#ffffff",
            padding: "18px 40px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Contact Mining Division
        </Link>
      </div>
    </section>
  );
}

export default CTA;