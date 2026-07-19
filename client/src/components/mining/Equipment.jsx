import excavator from "../../assets/equipment/excavator.jpg";
import processing from "../../assets/equipment/processing-plant.jpg";
import laboratory from "../../assets/equipment/laboratory.jpg";

const equipment = [
  {
    title: "Modern Mining Equipment",
    image: excavator,
    text: "Our operations utilize advanced excavation, drilling and hauling equipment to maximize efficiency while minimizing environmental impact.",
  },
  {
    title: "Mineral Processing Plants",
    image: processing,
    text: "State-of-the-art processing facilities ensure maximum mineral recovery through sustainable and energy-efficient technologies.",
  },
  {
    title: "Quality Assurance Laboratories",
    image: laboratory,
    text: "Every shipment undergoes internationally recognized laboratory analysis, ensuring compliance with global mining and refining standards.",
  },
];

function Equipment() {
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
        Equipment & Technology
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 80px",
          textAlign: "center",
          color: "#cccccc",
          fontSize: "1.1rem",
          lineHeight: "1.8",
        }}
      >
        Zina Commodities combines cutting-edge mining technology with
        internationally recognized operational standards to deliver safe,
        efficient and sustainable mineral production.
      </p>

      {equipment.map((item, index) => (
        <div
          key={item.title}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "90px",
          }}
        >
          {index % 2 === 0 ? (
            <>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 20px 45px rgba(0,0,0,.35)",
                }}
              />

              <div>
                <h3
                  style={{
                    color: "#D4AF37",
                    fontSize: "2rem",
                    marginBottom: "25px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#ddd",
                    fontSize: "1.1rem",
                    lineHeight: "1.9",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3
                  style={{
                    color: "#D4AF37",
                    fontSize: "2rem",
                    marginBottom: "25px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#ddd",
                    fontSize: "1.1rem",
                    lineHeight: "1.9",
                  }}
                >
                  {item.text}
                </p>
              </div>

              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 20px 45px rgba(0,0,0,.35)",
                }}
              />
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Equipment;