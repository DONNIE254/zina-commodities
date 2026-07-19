import gold from "../../assets/mining/gold.jpg";
import copper from "../../assets/mining/copper.jpg";
import lithium from "../../assets/mining/lithium.jpg";

const projects = [
  {
    title: "Western Gold Project",
    country: "Kenya",
    image: gold,
    status: "Operational",
    reserve: "4.2 Moz Gold",
  },
  {
    title: "Copper Belt Project",
    country: "Zambia",
    image: copper,
    status: "Development",
    reserve: "18 Mt Copper",
  },
  {
    title: "Lithium Valley",
    country: "Zimbabwe",
    image: lithium,
    status: "Exploration",
    reserve: "8 Mt Lithium Ore",
  },
];

function Projects() {
  return (
    <section
      style={{
        background: "#071a2d",
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
        Active Mining Projects
      </h2>

      <p
        style={{
          maxWidth: "850px",
          margin: "0 auto 70px",
          textAlign: "center",
          color: "#cccccc",
          lineHeight: 1.8,
          fontSize: "1.1rem",
        }}
      >
        Our portfolio spans strategic mineral assets across Africa,
        supplying global industries with responsibly produced resources.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
          gap: "40px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#0d2743",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,.35)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "30px" }}>
              <h3
                style={{
                  color: "#D4AF37",
                  marginBottom: "15px",
                  fontSize: "1.6rem",
                }}
              >
                {project.title}
              </h3>

              <p style={{ color: "#fff" }}>
                <strong>Country:</strong> {project.country}
              </p>

              <p style={{ color: "#fff" }}>
                <strong>Status:</strong> {project.status}
              </p>

              <p style={{ color: "#fff" }}>
                <strong>Reserves:</strong> {project.reserve}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;