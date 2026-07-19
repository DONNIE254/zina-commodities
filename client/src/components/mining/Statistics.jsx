const stats = [
  {
    number: "18+",
    title: "Mining Sites",
  },
  {
    number: "42M",
    title: "Tonnes Extracted",
  },
  {
    number: "12+",
    title: "Minerals Produced",
  },
  {
    number: "6,000+",
    title: "Employees",
  },
  {
    number: "25%",
    title: "Annual Growth",
  },
  {
    number: "100%",
    title: "ESG Compliance",
  },
];

function Statistics() {
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
        Mining By The Numbers
      </h2>

      <p
        style={{
          color: "#cccccc",
          maxWidth: "850px",
          margin: "0 auto 80px",
          textAlign: "center",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Our performance reflects operational excellence, responsible mining,
        sustainable production and long-term value creation.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "35px",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#0a1d35",
              borderRadius: "16px",
              padding: "45px 30px",
              textAlign: "center",
              boxShadow: "0 15px 40px rgba(0,0,0,.25)",
            }}
          >
            <h1
              style={{
                color: "#D4AF37",
                fontSize: "3.5rem",
                marginBottom: "15px",
                fontWeight: "700",
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                color: "#ffffff",
                fontSize: "1.1rem",
                letterSpacing: "1px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;