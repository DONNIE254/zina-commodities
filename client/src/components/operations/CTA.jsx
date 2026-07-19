import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import refinery from "../../assets/operations/refinery.jpg";

function CTA() {
  return (
    <section
      style={{
        position: "relative",
        height: "70vh",
        overflow: "hidden",
      }}
    >
      {/* Background */}

      <img
        src={refinery}
        alt="Refinery"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(2,18,37,.85), rgba(2,18,37,.90))",
        }}
      />

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "3.5rem",
            color: "#D4AF37",
            marginBottom: "25px",
          }}
        >
          Partner With Zina Commodities
        </h2>

        <p
          style={{
            maxWidth: "850px",
            fontSize: "1.2rem",
            lineHeight: 1.8,
            marginBottom: "50px",
          }}
        >
          Join one of Africa's fastest-growing mineral companies. We work with
          governments, mining firms, investors, refiners and global buyers to
          deliver sustainable mineral solutions backed by integrity,
          innovation and operational excellence.
        </p>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            to="/investments"
            style={{
              padding: "18px 40px",
              background: "#D4AF37",
              color: "#021225",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "10px",
              transition: ".3s",
            }}
          >
            Become A Partner
          </Link>

          <Link
            to="/contact"
            style={{
              padding: "18px 40px",
              border: "2px solid #D4AF37",
              color: "#D4AF37",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "10px",
              transition: ".3s",
            }}
          >
            Contact Our Team
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;