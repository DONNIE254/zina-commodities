import gold from "../../assets/mining/gold.jpg";
import copper from "../../assets/mining/copper.jpg";
import lithium from "../../assets/mining/lithium.jpg";
import cobalt from "../../assets/mining/cobalt.jpg";
import refinery from "../../assets/equipment/processing-plant.jpg";
import lab from "../../assets/equipment/laboratory.jpg";

const images = [
  {
    image: gold,
    title: "Gold Processing",
  },
  {
    image: copper,
    title: "Copper Extraction",
  },
  {
    image: lithium,
    title: "Lithium Mining",
  },
  {
    image: cobalt,
    title: "Cobalt Operations",
  },
  {
    image: refinery,
    title: "Processing Facility",
  },
  {
    image: lab,
    title: "Quality Laboratory",
  },
];

function Gallery() {
  return (
    <section
      style={{
        background: "#021225",
        padding: "110px 8%",
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
        Mining Gallery
      </h2>

      <p
        style={{
          color: "#cccccc",
          maxWidth: "850px",
          margin: "0 auto 70px",
          textAlign: "center",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        A visual showcase of our mining operations, processing facilities,
        laboratories and sustainable mineral development across Africa.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {images.map((item) => (
          <div
            key={item.title}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "18px",
              boxShadow: "0 20px 45px rgba(0,0,0,.35)",
              cursor: "pointer",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "0.4s",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(transparent, rgba(0,0,0,.8))",
                display: "flex",
                alignItems: "flex-end",
                padding: "25px",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  margin: 0,
                  fontSize: "1.5rem",
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;