import { motion } from "framer-motion";
import hero from "../../assets/investments/hero.jpg";

function Hero() {
  return (
    <section
      style={{
        height: "75vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={hero}
        alt="Investments"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />

      {/* Rest of the Hero code goes here */}
    </section>
  );
}

export default Hero;