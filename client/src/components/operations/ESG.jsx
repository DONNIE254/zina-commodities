import { motion } from "framer-motion";

const items = [
  {
    title: "Environmental Stewardship",
    icon: "🌿",
    text: "We minimise environmental impact through responsible mining, land rehabilitation and sustainable resource management.",
  },
  {
    title: "Community Development",
    icon: "🤝",
    text: "Supporting education, healthcare, employment and local economic growth within the communities where we operate.",
  },
  {
    title: "Health & Safety",
    icon: "🦺",
    text: "Maintaining world-class occupational safety standards through continuous training and modern operational procedures.",
  },
  {
    title: "Ethical Governance",
    icon: "⚖️",
    text: "Operating transparently while complying with international mining regulations and responsible sourcing standards.",
  },
];

function ESG() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#ffffff",
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "#021225",
            marginBottom: "20px",
          }}
        >
          Sustainability & ESG
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            maxWidth: "850px",
            margin: "0 auto 70px",
            lineHeight: "1.9",
          }}
        >
          Sustainability is central to every stage of our operations. We
          balance economic growth with environmental protection, employee
          wellbeing and community development.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              style={{
                background: "#f8f9fb",
                borderRadius: "18px",
                padding: "35px",
                textAlign: "center",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
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
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ESG;