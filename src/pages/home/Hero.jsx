import { useEffect, useRef, useState } from "react";
import bgVideo from '../../assets/bg.mp4'

function Hero() {
    const cursor = useRef(null);
    const professionBox = ["Gamer", "Live Streamer", "Youtuber", "Content Creator"];
    const [profession, setProfession] = useState("");
    const [professionIndex, setProfessionIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    let typingSpeed = 150;

    useEffect(() => {
        let currentProfession = professionBox[professionIndex];
        let charIndex = 0;

        const typing = setInterval(() => {
            if(charIndex <= currentProfession.length){
                setDisplayText(currentProfession.slice(0, charIndex));
                charIndex++;
            }else {
                clearInterval(typing);

                setTimeout(() => {
                    deletion();
                }, 1500)
            }
        }, typingSpeed)

        return () => clearInterval(typing);
    }, [professionIndex]);

    function deletion() {
        let charIndex = professionBox[professionIndex].length;
        
        const del = setInterval(() => {
            if(charIndex > 0) {
                setDisplayText(professionBox[professionIndex].slice(0, charIndex));
                charIndex--;
            } else {
                clearInterval(del);
                setProfessionIndex((prev) => (prev + 1) % professionBox.length);
            }
        }, typingSpeed);

        return () => clearInterval(del);
    }


    return (
        <section className="relative w-screen bg-[linear-gradient(#00000047,#000000b3)]">
            <div className="absolute w-full top-32 z-10">
                <div className="grid gap-5 place-items-center text-white">
                    <h1 className="text-5xl font-semibold text-shadow-[0px_0px_5px_white]">Hi, I'm <span className="text-[crimson] font-bold">MT GAMERS</span></h1>
                    <h3 className="flex items-center gap-3 text-4xl font-bold text-shadow-[0px_0px_5px_white]">I'm a <span className="text-[crimson] flex">{displayText} <span ref={cursor} className="animate-[pulse_1s_ease_infinite]">|</span></span></h3>
                </div>
            </div>

            <video src={bgVideo} className="relative w-full z-[-1]" muted autoPlay loop></video>
        </section>
    );
}

export default Hero;