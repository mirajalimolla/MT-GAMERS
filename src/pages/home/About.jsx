import Heading from "./homecomponent/Heading";

function About() {
    return (
        <section className="relative grid place-items-center h-[70vh] bg-[url('./src/assets/aboutBg.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-[95%] grid justify-center items-center gap-5 m-auto">
                <Heading text={"ABOUT ME"}/>
                <p className="text-gray-300 font-bold text-center text-sm sm:text-[16px] lg:text-lg">Hi, I am Rahul Khan owner of the MT GAMERS youtube channel, I have been creating Free Fire gaming videos on youtube. I'm RK! Here you will find me playing mobile games and having some fun. I'm playing Free Fire. With you on the MT Gamers channel. Full Indian gamer with Bengali and Hindi commentary.</p>
            </div>
        </section>
    );
}

export default About;