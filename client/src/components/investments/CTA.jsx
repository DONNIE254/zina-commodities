import { motion } from "framer-motion";
import background from "../../assets/investments/investment-cta.jpg";

function CTA() {
  return (
    <section
      style={{
        position: "relative",
        height: "550px",
        overflow: "hidden",
      }}
    >
      <img
        src={background}
        alt="Investment"
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
            "linear-gradient(rgba(2,18,37,.85),rgba(2,18,37,.85))",
        }}
      />

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
          padding: "0 30px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          style={{
            color: "#fff",
            fontSize: "3.5rem",
            marginBottom: "30px",
          }}
        >
          Build The Future With
          <br />
          <span style={{ color: "#D4AF37" }}>
            Zina Commodities
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          style={{
            color: "#ddd",
            maxWidth: "850px",
            lineHeight: 1.8,
            marginBottom: "45px",
            fontSize: "1.15rem",
          }}
        >
          Join our growing network of investors, strategic partners and
          institutions shaping the future of Africa's mineral economy.
        </motion.p>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              background: "#D4AF37",
              color: "#021225",
              border: "none",
              padding: "18px 38px",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Request Prospectus
          </button>

          <button
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid #D4AF37",
              padding: "18px 38px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;