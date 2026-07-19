import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

function Contact() {
useEffect(() => {
if (window.location.hash === "#media") {
setTimeout(() => {
document.getElementById("media")?.scrollIntoView({
behavior: "smooth",
});
}, 300);
}
}, []);

return (
<>
<Navbar />

  <main
    style={{
      background: "#021225",
      color: "#ffffff",
      minHeight: "100vh",
    }}
  >
    <section
      style={{
        minHeight: "65vh",
        display: "flex",
        alignItems: "center",
        padding: "140px 8% 100px",
        background:
          "linear-gradient(rgba(2,18,37,.82), rgba(2,18,37,.95))",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            fontWeight: "bold",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Connect With Us
        </p>

        <h1
          style={{
            fontSize: "4rem",
            lineHeight: "1.2",
            marginBottom: "25px",
          }}
        >
          Let's Build The Future{" "}
          <span style={{ color: "#D4AF37" }}>Together</span>
        </h1>

        <p
          style={{
            color: "#cccccc",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          Whether you are an investor, business partner, customer,
          journalist or commodities professional, our team is ready
          to connect with you.
        </p>
      </div>
    </section>

    <section
      style={{
        padding: "100px 8%",
        background: "#071a2d",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        <div
          style={{
            background: "#0a1d35",
            padding: "35px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#D4AF37" }}>
            General Enquiries
          </h3>

          <p style={{ color: "#cccccc" }}>
            For general information and business enquiries.
          </p>

          <a
            href="mailto:info@zinacommodities.com"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            info@zinacommodities.com
          </a>
        </div>

        <div
          style={{
            background: "#0a1d35",
            padding: "35px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#D4AF37" }}>
            Business Partnerships
          </h3>

          <p style={{ color: "#cccccc" }}>
            Explore strategic partnerships and opportunities.
          </p>

          <a
            href="mailto:partnerships@zinacommodities.com"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            partnerships@zinacommodities.com
          </a>
        </div>

        <div
          style={{
            background: "#0a1d35",
            padding: "35px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#D4AF37" }}>
            Phone
          </h3>

          <p style={{ color: "#cccccc" }}>
            Speak directly with our team.
          </p>

          <a
            href="tel:+254700000000"
            style={{
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            +254 700 000 000
          </a>
        </div>
      </div>
    </section>

    <section
      style={{
        padding: "110px 8%",
        background: "#021225",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Smelting & Processing
          </p>

          <h2
            style={{
              color: "#ffffff",
              fontSize: "3rem",
              lineHeight: "1.2",
              marginBottom: "25px",
            }}
          >
            Ready to Process Your{" "}
            <span style={{ color: "#D4AF37" }}>
              Material?
            </span>
          </h2>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              marginBottom: "30px",
            }}
          >
            Partner with Zina Commodities for professional mineral
            processing and smelting services. Submit your requirements
            and our team will review your request and guide you through
            the next steps.
          </p>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/smelting"
              style={{
                background: "#D4AF37",
                color: "#021225",
                padding: "16px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Book Smelting Services
            </Link>

            <a
              href="https://wa.me/254710354594"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #D4AF37",
                color: "#D4AF37",
                padding: "16px 28px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Chat With Our Team
            </a>
          </div>
        </div>

        <div
          style={{
            background: "#0a1d35",
            padding: "40px",
            borderRadius: "18px",
            border: "1px solid #29415c",
          }}
        >
          <h3
            style={{
              color: "#D4AF37",
              fontSize: "1.8rem",
              marginBottom: "20px",
            }}
          >
            Why Contact Our Team?
          </h3>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            ✓ Professional processing support
          </p>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            ✓ Secure and responsible operations
          </p>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            ✓ Tailored solutions for your requirements
          </p>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            ✓ Direct communication with our team
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
          maxWidth: "850px",
          margin: "0 auto",
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
          Send Us A Message
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#cccccc",
            marginBottom: "45px",
          }}
        >
          Complete the form below and our team will get back to you.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you. Your message has been received.");
          }}
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #29415c",
              background: "#0a1d35",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #29415c",
              background: "#0a1d35",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          />

          <input
            type="text"
            placeholder="Subject"
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #29415c",
              background: "#0a1d35",
              color: "#ffffff",
              fontSize: "1rem",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="7"
            required
            style={{
              padding: "17px",
              borderRadius: "8px",
              border: "1px solid #29415c",
              background: "#0a1d35",
              color: "#ffffff",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#D4AF37",
              color: "#021225",
              border: "none",
              padding: "17px",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    <section
      id="media"
      style={{
        background: "#021225",
        padding: "110px 8%",
        scrollMarginTop: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#D4AF37",
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Media Relations
        </p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "3rem",
            marginBottom: "25px",
          }}
        >
          Media{" "}
          <span style={{ color: "#D4AF37" }}>
            Enquiries
          </span>
        </h2>

        <p
          style={{
            color: "#cccccc",
            maxWidth: "750px",
            margin: "0 auto 45px",
            lineHeight: "1.8",
            fontSize: "1.1rem",
          }}
        >
          For press enquiries, interviews, company announcements,
          media requests and corporate information, please contact
          our communications team.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:donnieotieno1@gmail.com?subject=Media%20Enquiry%20-%20Zina%20Commodities"
            style={{
              background: "#D4AF37",
              color: "#021225",
              padding: "16px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Email Media Team
          </a>

          <a
            href="https://wa.me/254710354594"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #D4AF37",
              color: "#D4AF37",
              padding: "16px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Chat With Team
          </a>
        </div>
      </div>
    </section>
  </main>

  <Footer />

  <FloatingContact />
</>

);
}

export default Contact;