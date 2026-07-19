import { motion } from "framer-motion";

const items = [
  {
    title: "Mining Operations",
    description:
      "Responsible extraction of gold, copper, lithium, cobalt and other strategic minerals using modern mining technologies.",
  },
  {
    title: "Mineral Processing",
    description:
      "Advanced crushing, concentration and processing systems designed to maximize mineral recovery and operational efficiency.",
  },
  {
    title: "Refining & Export",
    description:
      "International-standard refining supported by secure logistics and global export channels serving customers worldwide.",
  },
];

function Overview() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#f8f9fb",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
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
            fontSize: "2.8rem",
            color: "#021225",
            marginBottom: "20px",
          }}
        >
          Excellence Across the Entire Value Chain
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "900px",
            margin: "0 auto 70px",
            textAlign: "center",
            lineHeight: 1.9,
            color: "#666",
            fontSize: "1.1rem",
          }}
        >
          Zina Commodities integrates mining, processing, refining,
          logistics and international trade into one seamless operation,
          delivering premium mineral products while maintaining the highest
          standards of safety, quality and environmental responsibility.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              style={{
                background: "#fff",
                padding: "35px",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "#D4AF37",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#021225",
                  fontWeight: "bold",
                  marginBottom: "25px",
                }}
              >
                {index + 1}
              </div>

              <h3
                style={{
                  color: "#021225",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;