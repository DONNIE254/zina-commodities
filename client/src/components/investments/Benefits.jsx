import { motion } from "framer-motion";

const benefits = [
  {
    icon: "💰",
    title: "Strong Return Potential",
    text: "Benefit from long-term growth driven by global demand for precious and strategic minerals.",
  },
  {
    icon: "🌍",
    title: "Global Market Access",
    text: "Our export network connects African mineral resources with buyers and refineries across the world.",
  },
  {
    icon: "🛡️",
    title: "Responsible Investment",
    text: "Operations follow international environmental, safety and responsible sourcing standards.",
  },
  {
    icon: "📊",
    title: "Diversified Portfolio",
    text: "Invest across gold, copper, lithium, refining, logistics and commodity trading.",
  },
  {
    icon: "🤝",
    title: "Strategic Partnerships",
    text: "We collaborate with governments, financial institutions and international mining companies.",
  },
  {
    icon: "🚀",
    title: "Long-Term Growth",
    text: "Our integrated value chain positions investors for sustainable future expansion.",
  },
];

function Benefits() {
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
          Investor Benefits
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 70px",
            color: "#666",
            lineHeight: 1.8,
          }}
        >
          Investing with Zina Commodities provides access to Africa's growing
          mineral sector through responsible operations, strong governance and
          international market opportunities.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "35px",
                boxShadow: "0 20px 40px rgba(0,0,0,.08)",
                borderTop: "4px solid #D4AF37",
              }}
            >
              <div
                style={{
                  fontSize: "2.8rem",
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

export default Benefits;