import { Link } from "react-router-dom";
import featuredImage from "../../assets/news/news-hero.jpg";

function FeaturedNews() {
return (
<section
style={{
background: "#071a2d",
padding: "110px 8%",
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
display: "flex",
justifyContent: "space-between",
alignItems: "flex-end",
gap: "30px",
flexWrap: "wrap",
marginBottom: "50px",
}}
>
<div>
<p
style={{
color: "#D4AF37",
fontWeight: "bold",
letterSpacing: "2px",
textTransform: "uppercase",
marginBottom: "12px",
}}
>
Featured Story
</p>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "3rem",
            margin: 0,
          }}
        >
          Latest From{" "}
          <span style={{ color: "#D4AF37" }}>
            Zina Commodities
          </span>
        </h2>
      </div>

      <Link
        to="/contact#media"
        style={{
          color: "#D4AF37",
          textDecoration: "none",
          border: "1px solid #D4AF37",
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        Media Enquiries
      </Link>
    </div>

    <article
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(320px, 1fr))",
        background: "#0a1d35",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,.3)",
      }}
    >
      <div
        style={{
          minHeight: "420px",
          overflow: "hidden",
        }}
      >
        <img
          src={featuredImage}
          alt="Zina Commodities corporate news"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "420px",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          padding: "55px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "fit-content",
            background: "#D4AF37",
            color: "#021225",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: ".85rem",
            fontWeight: "bold",
            marginBottom: "22px",
          }}
        >
          COMPANY NEWS
        </span>

        <p
          style={{
            color: "#aaaaaa",
            marginBottom: "18px",
          }}
        >
          July 2026
        </p>

        <h3
          style={{
            color: "#ffffff",
            fontSize: "2.2rem",
            lineHeight: "1.3",
            marginBottom: "22px",
          }}
        >
          Building Africa's Future Through Responsible Commodities
        </h3>

        <p
          style={{
            color: "#cccccc",
            lineHeight: "1.8",
            fontSize: "1.05rem",
            marginBottom: "30px",
          }}
        >
          Zina Commodities continues to expand its responsible mining,
          processing, investment and commodities operations across Africa,
          creating long-term value through sustainable resource development
          and strategic partnerships.
        </p>

        <Link
          to="/news/featured"
          style={{
            width: "fit-content",
            background: "#D4AF37",
            color: "#021225",
            padding: "14px 28px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Read Full Story
        </Link>
      </div>
    </article>
  </div>
</section>

);
}

export default FeaturedNews;