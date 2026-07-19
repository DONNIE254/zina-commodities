import { motion } from "framer-motion";
import hero from "../../assets/news/news-hero.jpg";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      <img
        src={hero}
        alt="News"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(2,18,37,.75), rgba(2,18,37,.90))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              color: "#fff",
              fontSize: "4.5rem",
              lineHeight: "1.15",
              marginBottom: "30px",
            }}
          >
            News &
            <br />

            <span style={{ color: "#D4AF37" }}>
              Press Releases
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            style={{
              color: "#ddd",
              fontSize: "1.2rem",
              lineHeight: "1.9",
            }}
          >
            Stay informed with the latest company announcements,
            operational milestones, investment updates,
            sustainability initiatives and corporate developments
            from Zina Commodities.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Hero;