import About from "./About";
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
        </>
    );
}

export default Home;