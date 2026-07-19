import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "Discuss investment objectives, project opportunities and partnership structures with our investment team.",
  },
  {
    number: "02",
    title: "Due Diligence",
    text: "Review technical reports, financial information, legal compliance and operational performance.",
  },
  {
    number: "03",
    title: "Investment Agreement",
    text: "Finalize commercial terms, governance structure and investment documentation.",
  },
  {
    number: "04",
    title: "Project Execution",
    text: "Capital is deployed into mining, refining or infrastructure projects with continuous reporting.",
  },
  {
    number: "05",
    title: "Long-Term Partnership",
    text: "Receive regular performance reports, returns and participate in future expansion opportunities.",
  },
];

function Timeline() {
  return (
    <section
      style={{
        padding: "110px 8%",
        background: "#021225",
        color: "white",
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
            color: "#D4AF37",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Investment Process
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "0 auto 80px",
            color: "#ddd",
            lineHeight: 1.9,
          }}
        >
          Our structured investment approach ensures transparency,
          accountability and long-term value creation throughout every stage.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "35px",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                gap: "30px",
                alignItems: "center",
                background: "rgba(255,255,255,.05)",
                padding: "30px",
                borderRadius: "18px",
                borderLeft: "5px solid #D4AF37",
              }}
            >
              <div
                style={{
                  minWidth: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "#D4AF37",
                  color: "#021225",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {step.number}
              </div>

              <div>
                <h3
                  style={{
                    marginBottom: "12px",
                    color: "#fff",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#ccc",
                    lineHeight: 1.8,
                  }}
                >
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;