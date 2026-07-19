import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import Hero from "../components/investments/Hero";
import Overview from "../components/investments/Overview";
import Opportunities from "../components/investments/Opportunities";
import Benefits from "../components/investments/Benefits";
import Timeline from "../components/investments/Timeline";
import Financials from "../components/investments/Financials";
import FAQ from "../components/investments/FAQ";
import CTA from "../components/investments/CTA";


function Investments() {
  return (
    <>
      <Navbar />

      <Hero />

      <Overview />

      <Opportunities />

      <Benefits />

      <Timeline />

      <Financials />

      <FAQ />

      <CTA />

      <Footer />

      <FloatingContact />
    </>
  );
}

export default Investments;