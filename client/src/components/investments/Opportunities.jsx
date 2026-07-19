import { motion } from "framer-motion";

import gold from "../../assets/operations/gold.jpg";
import copper from "../../assets/operations/copper.jpg";
import lithium from "../../assets/operations/lithium.jpg";
import refinery from "../../assets/operations/refinery.jpg";

const opportunities = [
  {
    title: "Gold Investment",
    image: gold,
    text: "Participate in responsible gold mining, refining and international bullion trading backed by sustainable operations.",
  },
  {
    title: "Copper Projects",
    image: copper,
    text: "Invest in one of the world's fastest-growing industrial metals supporting renewable energy and infrastructure.",
  },
  {
    title: "Lithium Resources",
    image: lithium,
    text: "Benefit from Africa's rapidly expanding battery minerals sector driven by the global electric vehicle revolution.",
  },
  {
    title: "Refining Infrastructure",
    image: refinery,
    text: "Support state-of-the-art refining facilities that increase mineral value before export to international markets.",
  },
];

function Opportunities() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#021225",
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
            color: "#D4AF37",
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Investment Opportunities
        </motion.h2>

        <p
          style={{
            color: "#ddd",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto 70px",
            lineHeight: 1.9,
          }}
        >
          Zina Commodities provides diversified investment opportunities across
          mining, refining, logistics and international commodity trading.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,.25)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "30px",
                }}
              >
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
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Opportunities;