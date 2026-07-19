import { motion } from "framer-motion";

const stats = [
  {
    value: "850M+",
    title: "Project Portfolio (USD)",
  },
  {
    value: "35+",
    title: "Strategic Partners",
  },
  {
    value: "18",
    title: "Export Markets",
  },
  {
    value: "99.8%",
    title: "Refining Purity",
  },
  {
    value: "12",
    title: "Mining Projects",
  },
  {
    value: "100%",
    title: "ESG Commitment",
  },
];

function Financials() {
  return (
    <section
      style={{
        padding: "110px 8%",
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
          Financial Highlights
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 70px",
            color: "#666",
            lineHeight: 1.8,
          }}
        >
          Our diversified portfolio and international operations continue to
          strengthen long-term shareholder value through sustainable growth.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                boxShadow: "0 20px 45px rgba(0,0,0,.08)",
                borderTop: "5px solid #D4AF37",
              }}
            >
              <h1
                style={{
                  color: "#D4AF37",
                  fontSize: "3.2rem",
                  marginBottom: "20px",
                }}
              >
                {item.value}
              </h1>

              <h3
                style={{
                  color: "#021225",
                }}
              >
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Financials;