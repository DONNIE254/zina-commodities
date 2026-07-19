import { motion } from "framer-motion";

const items = [
  {
    title: "Sustainable Growth",
    text: "We invest in responsible mining, refining and mineral processing that creates long-term value while protecting the environment.",
    icon: "📈",
  },
  {
    title: "Global Market Access",
    text: "Our international trading network connects African minerals with refineries, manufacturers and institutional buyers worldwide.",
    icon: "🌍",
  },
  {
    title: "Investor Confidence",
    text: "Transparency, compliance and strong corporate governance ensure confidence for institutional and private investors.",
    icon: "🤝",
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
          maxWidth: "1250px",
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
            marginBottom: "25px",
          }}
        >
          Why Invest In Zina Commodities?
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 70px",
            lineHeight: 1.9,
            color: "#666",
            fontSize: "1.1rem",
          }}
        >
          Zina Commodities combines responsible resource development,
          cutting-edge refining technologies and global commodity trading
          expertise to deliver sustainable long-term investment value.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
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
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,.08)",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "25px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: "#021225",
                  marginBottom: "20px",
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
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;