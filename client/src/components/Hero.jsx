import { motion } from "framer-motion";
import heroVideo from "../assets/videos/hero.mp4";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(2,18,37,0.85))",
        }}
      />

      {/* Hero Content */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "0 20px",
          color: "white",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "4.5rem",
            color: "#D4AF37",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          ZINA COMMODITIES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            maxWidth: "900px",
            fontSize: "1.3rem",
            lineHeight: "2",
            marginBottom: "40px",
          }}
        >
          Delivering world-class mining, refining and international
          commodity trading solutions with integrity, innovation and
          sustainability across Africa and global markets.
        </motion.p>

        <motion.a
          href="/operations"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            background: "#D4AF37",
            color: "#021225",
            padding: "16px 38px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Explore Operations
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;