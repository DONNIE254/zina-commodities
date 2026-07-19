import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import operationsBanner from "../../assets/banners/operations.jpg";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background */}

      <img
        src={operationsBanner}
        alt="Operations"
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
            "linear-gradient(rgba(0,0,0,.70),rgba(2,18,37,.88))",
        }}
      />

      {/* Content */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 8%",
        }}
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              color: "#D4AF37",
              fontSize: "4.5rem",
              marginBottom: "25px",
              letterSpacing: "3px",
            }}
          >
            GLOBAL OPERATIONS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: .5,
              duration: 1,
            }}
            style={{
              color: "#ffffff",
              maxWidth: "900px",
              margin: "auto",
              fontSize: "1.3rem",
              lineHeight: "2",
            }}
          >
            Zina Commodities operates an integrated mining,
            mineral processing, refining and export network
            delivering premium precious metals and strategic
            minerals to international markets while maintaining
            world-class environmental and safety standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            style={{
              marginTop: "45px",
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
                padding: "16px 36px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Contact Operations
            </Link>

            <Link
              to="/investments"
              style={{
                border: "2px solid #D4AF37",
                color: "#D4AF37",
                padding: "16px 36px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Investment Opportunities
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        style={{
          position: "absolute",
          bottom: "40px",
          width: "100%",
          textAlign: "center",
          color: "#D4AF37",
          zIndex: 3,
          fontSize: "2rem",
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}

export default Hero;