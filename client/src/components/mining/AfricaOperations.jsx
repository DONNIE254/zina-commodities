const countries = [
  {
    country: "Kenya",
    mineral: "Gold",
    status: "Operational",
  },
  {
    country: "Tanzania",
    mineral: "Gold & Copper",
    status: "Operational",
  },
  {
    country: "Zambia",
    mineral: "Copper",
    status: "Development",
  },
  {
    country: "DR Congo",
    mineral: "Cobalt",
    status: "Exploration",
  },
  {
    country: "Zimbabwe",
    mineral: "Lithium",
    status: "Development",
  },
  {
    country: "Ghana",
    mineral: "Gold",
    status: "Operational",
  },
];

function AfricaOperations() {
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
        African Operations
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 70px",
          color: "#cccccc",
          textAlign: "center",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Zina Commodities is strategically positioned across Africa's most
        resource-rich regions, supporting sustainable mining and responsible
        mineral development.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {countries.map((item) => (
          <div
            key={item.country}
            style={{
              background: "#0a1d35",
              borderRadius: "15px",
              padding: "30px",
              borderLeft: "5px solid #D4AF37",
              boxShadow: "0 15px 35px rgba(0,0,0,.25)",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "1.6rem",
                marginBottom: "15px",
              }}
            >
              {item.country}
            </h3>

            <p
              style={{
                color: "#D4AF37",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Primary Mineral
            </p>

            <p
              style={{
                color: "#dddddd",
                marginBottom: "20px",
              }}
            >
              {item.mineral}
            </p>

            <span
              style={{
                display: "inline-block",
                background:
                  item.status === "Operational"
                    ? "#0f8a4b"
                    : item.status === "Development"
                    ? "#d4af37"
                    : "#8c2f39",
                color: "#fff",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: ".9rem",
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AfricaOperations;