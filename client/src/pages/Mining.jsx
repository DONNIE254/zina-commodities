import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import Hero from "../components/mining/Hero";
import Portfolio from "../components/mining/Portfolio";
import Projects from "../components/mining/Projects";
import Equipment from "../components/mining/Equipment";
import Statistics from "../components/mining/Statistics";
import AfricaOperations from "../components/mining/AfricaOperations";
import Gallery from "../components/mining/Gallery";
import CTA from "../components/mining/CTA";

function Mining() {
  return (
    <>
      <Navbar />

      <Hero />

      <Portfolio />

      <Projects />

      <Equipment />

      <Statistics />

      <AfricaOperations />

      <Gallery />

      <CTA />

      <Footer />

      <FloatingContact />
    </>
  );
}

export default Mining;