import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

import Hero from "../components/news/Hero";
import FeaturedNews from "../components/news/FeaturedNews";

function News() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedNews />

      <Footer />

      <FloatingContact />
    </>
  );
}

export default News;