import { motion } from "framer-motion";
import hero from "../../assets/mining/mining-hero.jpg";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}

      <img
        src={hero}
        alt="Mining Operations"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Dark Overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(2,18,37,0.72), rgba(2,18,37,0.88))",
        }}
      />

      {/* Hero Content */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "120px 8% 0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              color: "#ffffff",
              fontSize: "clamp(3rem,6vw,5rem)",
              lineHeight: "1.1",
              marginBottom: "30px",
              fontWeight: "700",
            }}
          >
            Mining The Future
            <br />
            <span style={{ color: "#D4AF37" }}>
              Responsibly
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: "#dddddd",
              fontSize: "1.2rem",
              lineHeight: "1.9",
              marginBottom: "45px",
            }}
          >
            Zina Commodities develops world-class mining projects focused on
            responsible resource extraction, environmental stewardship and
            sustainable long-term value creation across Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#D4AF37",
                color: "#021225",
                border: "none",
                padding: "18px 40px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Explore Projects
            </button>

            <button
              style={{
                background: "transparent",
                color: "#ffffff",
                border: "2px solid #D4AF37",
                padding: "18px 40px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Contact Mining Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;