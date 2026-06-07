import About from "./About";
import Details from "./Details";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ImgSection from "./imgSection";
import Service from "./Service";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Service />
            <ImgSection />
            <About />
            <Details />
            <Footer />
        </>
    );
}

export default Home;