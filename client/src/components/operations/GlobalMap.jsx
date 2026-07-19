import { motion } from "framer-motion";
import worldMap from "../../assets/maps/world-map.png";

const locations = [
  {
    country: "Kenya",
    office: "Head Office",
  },
  {
    country: "Tanzania",
    office: "Mining Operations",
  },
  {
    country: "DR Congo",
    office: "Copper & Cobalt",
  },
  {
    country: "South Africa",
    office: "Strategic Partnerships",
  },
  {
    country: "UAE",
    office: "Dubai Trading Office",
  },
  {
    country: "Switzerland",
    office: "Precious Metals Market",
  },
];

function GlobalMap() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#021225",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Global Operations
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 60px",
            color: "#ddd",
            lineHeight: "1.9",
          }}
        >
          Zina Commodities connects African mineral resources to global
          markets through responsible mining, refining and international
          logistics.
        </p>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src={worldMap}
          alt="Global Operations"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "60px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          {locations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              style={{
                background: "#0c2747",
                padding: "25px",
                borderRadius: "15px",
                border: "1px solid rgba(212,175,55,.3)",
              }}
            >
              <h3
                style={{
                  color: "#D4AF37",
                  marginBottom: "10px",
                }}
              >
                {item.country}
              </h3>

              <p
                style={{
                  color: "#ddd",
                }}
              >
                {item.office}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalMap;