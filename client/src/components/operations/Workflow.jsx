import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Mineral Exploration",
    description:
      "Geological surveys, feasibility studies and resource identification using advanced exploration technologies.",
  },
  {
    number: "02",
    title: "Responsible Mining",
    description:
      "Safe and environmentally responsible extraction of precious and strategic minerals.",
  },
  {
    number: "03",
    title: "Mineral Processing",
    description:
      "Crushing, concentration and beneficiation to maximize mineral recovery and quality.",
  },
  {
    number: "04",
    title: "Smelting & Refining",
    description:
      "Modern refining processes delivering internationally accepted purity standards.",
  },
  {
    number: "05",
    title: "Quality Assaying",
    description:
      "Independent laboratory analysis and certification of every batch before shipment.",
  },
  {
    number: "06",
    title: "Global Export",
    description:
      "Secure logistics and international delivery to clients across global markets.",
  },
];

function Workflow() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#f7f8fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "#021225",
            marginBottom: "20px",
          }}
        >
          Our Operational Workflow
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 70px",
            color: "#666",
            lineHeight: "1.9",
          }}
        >
          Every project follows a carefully managed workflow that guarantees
          operational excellence, environmental responsibility and world-class
          quality.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "35px",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "35px",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "#D4AF37",
                  color: "#021225",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  marginBottom: "25px",
                }}
              >
                {step.number}
              </div>

              <h3
                style={{
                  color: "#021225",
                  marginBottom: "15px",
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;