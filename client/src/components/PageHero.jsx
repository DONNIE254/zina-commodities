import { motion } from "framer-motion";

function PageHero({
  title,
  subtitle,
  image,
}) {
  return (
    <section
      style={{
        height: "70vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}

      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Dark Overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,.65),rgba(2,18,37,.85))",
        }}
      />

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            color: "#D4AF37",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            maxWidth: "850px",
            fontSize: "1.3rem",
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}

export default PageHero;