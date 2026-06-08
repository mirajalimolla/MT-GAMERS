import About from "./About";
import Details from "./Details";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ImgSection from "./imgSection";
import Service from "./Service";
import VideoSlider from "./VideoSlider";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Service />
            <ImgSection />
            <About />
            <Details />
            <VideoSlider />
            <Footer />
        </>
    );
}

export default Home;