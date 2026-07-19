import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Metals from "../components/Metals";
import Operations from "../components/Operations";
import MiningDivisions from "../components/MiningDivisions";
import Investments from "../components/Investments";
import News from "../components/News";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            <Metals />

            <Operations />

            <MiningDivisions />

            <Investments />

            <News />

            <Footer />

            <FloatingContact />
        </>
    );
}

export default Home;