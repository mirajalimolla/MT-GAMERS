import Heading from "./component/Heading";
import bgImg from "../../assets/aboutBg.jpg";

function About() {
    return (
        <section className="h-[45vh] relative">
            <img src={bgImg} className="max-h-100 w-screen object-cover absolute" />
            <div className="relative w-[70%] h-full grid content-center gap-5 m-auto">
                <Heading text={"ABOUT ME"}/>
                <p className="text-gray-300 font-bold text-center text-lg">Hi, I am Rahul Khan owner of the MT GAMERS youtube channel, I have been creating Free Fire gaming videos on youtube. I'm RK! Here you will find me playing mobile games and having some fun. I'm playing Free Fire. With you on the MT Gamers channel. Full Indian gamer with Bengali and Hindi commentary.</p>
            </div>
        </section>
    );
}

export default About;