import { motion } from "framer-motion";

const certifications = [
  {
    title: "ISO 9001",
    subtitle: "Quality Management",
    icon: "🏅",
  },
  {
    title: "ISO 14001",
    subtitle: "Environmental Management",
    icon: "🌍",
  },
  {
    title: "ISO 45001",
    subtitle: "Health & Safety",
    icon: "🛡️",
  },
  {
    title: "Responsible Minerals Initiative",
    subtitle: "Responsible Sourcing",
    icon: "⛏️",
  },
  {
    title: "OECD Compliance",
    subtitle: "Responsible Supply Chains",
    icon: "✔️",
  },
  {
    title: "Global Export Standards",
    subtitle: "International Trade",
    icon: "🌐",
  },
];

function Certifications() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#f8f9fb",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "#021225",
            marginBottom: "20px",
          }}
        >
          International Standards & Certifications
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "900px",
            margin: "0 auto 70px",
            lineHeight: "1.9",
          }}
        >
          Zina Commodities operates according to internationally recognised
          quality, environmental and responsible sourcing standards,
          ensuring transparency and trust across the global supply chain.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "35px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,.08)",
                borderTop: "5px solid #D4AF37",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: "#021225",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                }}
              >
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;