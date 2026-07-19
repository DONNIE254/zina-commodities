import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import Hero from "../components/operations/Hero";
import Overview from "../components/operations/Overview";
import Divisions from "../components/operations/Divisions";
import Workflow from "../components/operations/Workflow";
import GlobalMap from "../components/operations/GlobalMap";
import ESG from "../components/operations/ESG";
import Statistics from "../components/operations/Statistics";
import Certifications from "../components/operations/Certifications";
import CTA from "../components/operations/CTA";

function Operations() {
  return (
    <>
      <Navbar />

      <Hero />

      <Overview />

      <Divisions />
      
      <Workflow />

      <GlobalMap />

      <ESG />

      <Statistics />

      <Certifications />

      <CTA />

      <Footer />

      <FloatingContact />
    </>
  );
}

export default Operations;