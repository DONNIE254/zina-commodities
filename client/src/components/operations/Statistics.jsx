import { motion } from "framer-motion";

const stats = [
  {
    number: 28,
    suffix: "+",
    title: "Mining Projects",
  },
  {
    number: 15,
    suffix: "",
    title: "Countries Served",
  },
  {
    number: 99.99,
    suffix: "%",
    title: "Refining Purity",
  },
];

function Statistics() {
  return (
    <section
      style={{
        background: "#021225",
        padding: "80px",
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          color: "#D4AF37",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Operations At A Glance
      </motion.h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <h1>
              {item.number}
              {item.suffix}
            </h1>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;