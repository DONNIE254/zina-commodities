import gold from "../../assets/mining/gold.jpg";
import copper from "../../assets/mining/copper.jpg";
import lithium from "../../assets/mining/lithium.jpg";
import cobalt from "../../assets/mining/cobalt.jpg";

const minerals = [
  {
    title: "Gold",
    image: gold,
    description:
      "High-grade gold mining operations supplying international refineries and bullion markets.",
  },
  {
    title: "Copper",
    image: copper,
    description:
      "Large-scale copper production supporting global infrastructure and renewable energy.",
  },
  {
    title: "Lithium",
    image: lithium,
    description:
      "Strategic lithium resources powering electric vehicles and battery manufacturing.",
  },
  {
    title: "Cobalt",
    image: cobalt,
    description:
      "Responsible cobalt extraction for advanced battery and technology industries.",
  },
];

function Portfolio() {
  return (
    <section
      style={{
        background: "#021225",
        padding: "100px 8%",
        color: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#D4AF37",
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        Our Mineral Portfolio
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#cccccc",
          maxWidth: "850px",
          margin: "0 auto 70px",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Zina Commodities develops and operates world-class mining assets
        producing the minerals that power global industries and the future
        green economy.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
        }}
      >
        {minerals.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#0a1d35",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,.3)",
              transition: "0.3s",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  color: "#D4AF37",
                  marginBottom: "15px",
                  fontSize: "1.6rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#dddddd",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;