import { motion } from "framer-motion";

import gold from "../../assets/operations/gold.jpg";
import copper from "../../assets/operations/copper.jpg";
import lithium from "../../assets/operations/lithium.jpg";
import refinery from "../../assets/operations/refinery.jpg";

const divisions = [
  {
    title: "Gold Mining",
    image: gold,
    text: "Responsible exploration and extraction of high-grade gold deposits using modern mining technologies and internationally accepted safety standards."
  },
  {
    title: "Copper Production",
    image: copper,
    text: "Supplying premium-quality copper concentrates for industrial manufacturing and global infrastructure development."
  },
  {
    title: "Lithium Projects",
    image: lithium,
    text: "Supporting the global transition to clean energy through sustainable lithium mining for electric vehicle batteries and energy storage."
  },
  {
    title: "Refining & Export",
    image: refinery,
    text: "State-of-the-art refining facilities delivering internationally certified precious metals to global markets."
  }
];

function Divisions() {
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
            textAlign: "center",
            color: "#D4AF37",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Our Core Operations
        </motion.h2>

        <p
          style={{
            textAlign: "center",
            color: "#ddd",
            maxWidth: "850px",
            margin: "0 auto 70px",
            lineHeight: "1.9",
            fontSize: "1.1rem",
          }}
        >
          Zina Commodities operates across the entire mining value chain,
          delivering sustainable mineral extraction, advanced refining and
          secure international exports.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
          }}
        >
          {divisions.map((item, index) => (
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
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 20px 45px rgba(0,0,0,.18)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "250px",
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
                    fontSize: "1.6rem",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.8",
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

export default Divisions;