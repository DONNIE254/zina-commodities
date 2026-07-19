import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

function Smelting() {
const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
material: "",
quantity: "",
message: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

const subject = encodeURIComponent(
  "Smelting Service Request - Zina Commodities"
);

const body = encodeURIComponent(
  `Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Material Type: ${formData.material}

Estimated Quantity: ${formData.quantity}

Additional Information:
${formData.message}`
);

window.location.href =
  `mailto:donnieotieno1@gmail.com?subject=${subject}&body=${body}`;

};

const materials = [
{
name: "Gold",
description:
"Professional processing and smelting solutions for gold-bearing materials and concentrates.",
image:
"https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=900&q=85",
},
{
name: "Silver",
description:
"Reliable processing solutions designed for silver-bearing materials and concentrates.",
image:
"https://images.unsplash.com/photo-1610375461369-d613b9f1b6b0?auto=format&fit=crop&w=900&q=85",
},
{
name: "Copper",
description:
"Industrial processing support for copper-bearing materials and concentrates.",
image:
"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
},
{
name: "Lithium",
description:
"Mineral processing solutions supporting the growing battery materials sector.",
image:
"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85",
},
{
name: "Cobalt",
description:
"Processing support for cobalt-bearing materials used across modern industrial supply chains.",
image:
"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
},
];

return (
<>
<Navbar />

  <main
    style={{
      background: "#071a2d",
      color: "#ffffff",
      minHeight: "100vh",
    }}
  >
    <section
      style={{
        minHeight: "78vh",
        display: "flex",
        alignItems: "center",
        padding: "150px 8% 110px",
        position: "relative",
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(rgba(7,26,45,.68), rgba(7,26,45,.92)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=90')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 80% 40%, rgba(212,175,55,.22), transparent 35%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "760px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "22px",
              fontSize: ".9rem",
            }}
          >
            Advanced Mineral Processing
          </p>

          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: "1.05",
              marginBottom: "30px",
              fontWeight: "800",
            }}
          >
            Transforming{" "}
            <span style={{ color: "#D4AF37" }}>
              Minerals
            </span>
            <br />
            Into Opportunity
          </h1>

          <p
            style={{
              color: "#eeeeee",
              fontSize: "1.2rem",
              lineHeight: "1.9",
              maxWidth: "680px",
              marginBottom: "40px",
            }}
          >
            Professional smelting and mineral processing solutions
            for gold, silver, copper, lithium and cobalt. Connect
            with our team to discuss your material and processing
            requirements.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#booking-form"
              style={{
                background: "#D4AF37",
                color: "#071a2d",
                padding: "17px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Start Your Request
            </a>

            <a
              href="https://wa.me/254710354594"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #D4AF37",
                color: "#D4AF37",
                padding: "17px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Chat With Our Team
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      style={{
        padding: "90px 8%",
        background: "#0b2340",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "30px",
            background: "#102b47",
            borderRadius: "14px",
            border: "1px solid #365574",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              fontSize: "2.5rem",
              margin: "0 0 10px",
            }}
          >
            01
          </h3>

          <h4
            style={{
              color: "#ffffff",
              fontSize: "1.3rem",
              marginBottom: "12px",
            }}
          >
            Submit
          </h4>

          <p
            style={{
              color: "#c6d0da",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Tell us about your material and processing requirements.
          </p>
        </div>

        <div
          style={{
            padding: "30px",
            background: "#102b47",
            borderRadius: "14px",
            border: "1px solid #365574",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              fontSize: "2.5rem",
              margin: "0 0 10px",
            }}
          >
            02
          </h3>

          <h4
            style={{
              color: "#ffffff",
              fontSize: "1.3rem",
              marginBottom: "12px",
            }}
          >
            Review
          </h4>

          <p
            style={{
              color: "#c6d0da",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Our team reviews your request and requirements.
          </p>
        </div>

        <div
          style={{
            padding: "30px",
            background: "#102b47",
            borderRadius: "14px",
            border: "1px solid #365574",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              fontSize: "2.5rem",
              margin: "0 0 10px",
            }}
          >
            03
          </h3>

          <h4
            style={{
              color: "#ffffff",
              fontSize: "1.3rem",
              marginBottom: "12px",
            }}
          >
            Connect
          </h4>

          <p
            style={{
              color: "#c6d0da",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            We contact you to discuss the next steps.
          </p>
        </div>
      </div>
    </section>

    <section
      style={{
        padding: "110px 8%",
        background: "#071a2d",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "55px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Our Materials
          </p>

          <h2
            style={{
              fontSize: "3.2rem",
              margin: "15px 0",
            }}
          >
            Materials We{" "}
            <span style={{ color: "#D4AF37" }}>
              Process
            </span>
          </h2>

          <p
            style={{
              color: "#c6d0da",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            From precious metals to strategic minerals, our team
            works with clients across the commodities value chain.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {materials.map((material) => (
            <div
              key={material.name}
              style={{
                background: "#102b47",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #365574",
              }}
            >
              <div
                style={{
                  height: "210px",
                  backgroundImage: `linear-gradient(rgba(7,26,45,.18), rgba(7,26,45,.58)), url('${material.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    color: "#D4AF37",
                    fontSize: "1.6rem",
                    marginBottom: "12px",
                  }}
                >
                  {material.name}
                </h3>

                <p
                  style={{
                    color: "#c6d0da",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section
      id="booking-form"
      style={{
        padding: "110px 8%",
        background: "#0b2340",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Start A Conversation
          </p>

          <h2
            style={{
              fontSize: "3.2rem",
              lineHeight: "1.2",
              margin: "15px 0 25px",
            }}
          >
            Book Your{" "}
            <span style={{ color: "#D4AF37" }}>
              Smelting Service
            </span>
          </h2>

          <p
            style={{
              color: "#d1d9e0",
              lineHeight: "1.8",
              fontSize: "1.05rem",
            }}
          >
            Tell us about your material, quantity and requirements.
            Our team will review your request and contact you with
            the next steps.
          </p>

          <div
            style={{
              marginTop: "35px",
              padding: "25px",
              background: "#102b47",
              borderLeft: "4px solid #D4AF37",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                color: "#ffffff",
                margin: 0,
                lineHeight: "1.7",
              }}
            >
              Have an urgent enquiry?
              <br />
              <a
                href="https://wa.me/254710354594"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#D4AF37",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Chat directly with our team on WhatsApp →
              </a>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#102b47",
            padding: "40px",
            borderRadius: "18px",
            border: "1px solid #365574",
            boxShadow: "0 20px 60px rgba(0,0,0,.25)",
            display: "grid",
            gap: "18px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name or Company Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #365574",
              background: "#071a2d",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #365574",
              background: "#071a2d",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone / WhatsApp Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #365574",
              background: "#071a2d",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          />

          <select
            name="material"
            value={formData.material}
            onChange={handleChange}
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #365574",
              background: "#071a2d",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          >
            <option value="">
              Select Material Type
            </option>

            <option value="Gold">
              Gold
            </option>

            <option value="Silver">
              Silver
            </option>

            <option value="Copper">
              Copper
            </option>

            <option value="Lithium">
              Lithium
            </option>

            <option value="Cobalt">
              Cobalt
            </option>
          </select>

          <input
            type="text"
            name="quantity"
            placeholder="Estimated Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #365574",
              background: "#071a2d",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          />

          <textarea
            name="message"
            placeholder="Additional Information or Requirements"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #365574",
              background: "#071a2d",
              color: "#ffffff",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#D4AF37",
              color: "#071a2d",
              border: "none",
              padding: "17px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Submit Smelting Request
          </button>
        </form>
      </div>
    </section>
  </main>

  <Footer />

  <FloatingContact />
</>

);
}

export default Smelting;