import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import hero from "../assets/news/news-hero.jpg";

function NewsArticle() {
  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#021225",
          minHeight: "100vh",
          paddingTop: "140px",
          paddingBottom: "100px",
        }}
      >
        <article
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 30px",
          }}
        >
          <p
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            COMPANY NEWS
          </p>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "3.5rem",
              lineHeight: "1.2",
              marginBottom: "20px",
            }}
          >
            Building Africa's Future Through Responsible Commodities
          </h1>

          <p
            style={{
              color: "#999999",
              marginBottom: "40px",
            }}
          >
            July 2026
          </p>

          <img
            src={hero}
            alt="Zina Commodities corporate development"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "16px",
              marginBottom: "45px",
            }}
          />

          <div
            style={{
              color: "#cccccc",
              fontSize: "1.15rem",
              lineHeight: "2",
            }}
          >
            <p>
              Zina Commodities continues to strengthen its position as a
              responsible African commodities company focused on long-term
              value creation and sustainable resource development.
            </p>

            <p>
              Through strategic investments across mining, processing,
              operations and commodities, the company is building an
              integrated platform designed to support Africa's growing
              resource economy.
            </p>

            <p>
              Our approach combines operational excellence, responsible
              sourcing, environmental stewardship and strong partnerships with
              communities, investors and commercial partners.
            </p>

            <p>
              As Zina Commodities continues to grow, the company remains
              committed to creating sustainable opportunities while contributing
              to the development of Africa's mineral and commodities sector.
            </p>
          </div>
        </article>
      </main>

      <Footer />

      <FloatingContact />
    </>
  );
}

export default NewsArticle;