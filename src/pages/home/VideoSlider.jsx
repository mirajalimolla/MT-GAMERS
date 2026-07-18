import { useEffect, useRef, useState } from "react";
import VideoCard from "./homecomponent/VideoCard";
import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";

function VideoSlider() {
    const container = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    let position = 0;

    useEffect(() => {
        setCardWidth(container.current.getBoundingClientRect().width / container.current.children.length);
        setContainerWidth(container.current.getBoundingClientRect().width)
    }, []);

    // Move Left
    const moveLeft = (e) => {
        // Set direction when can't move left
        if (position >= 0) {
            console.log(e);
            return;
        }
        position += cardWidth;
        container.current.style.left = `${position}px`;
    }

    // Move Right
    const moveRight = () => {
        if(position <= (-containerWidth - (-window.innerWidth))) return; // After extrem left we cut the screen size for setting slider limit
        position -= cardWidth;
        container.current.style.left = `${position}px`;
    }

    return (
        <section className="bg-[#100101fa]">
            <div className="relative py-2 px-3 overflow-hidden">
                <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2 z-40">
                    <div onClick={(e) => moveLeft(e)} className="bg-[#4a1515de] text-gray-400 p-3 cursor-pointer z-20">
                        <PiLessThanBold fontSize={40} className="z-10"/>
                    </div>
                    <div onClick={() => moveRight()} className="bg-[#4a1515de] text-gray-400 p-3 cursor-pointer mr-6">
                        <PiGreaterThanBold fontSize={40} />
                    </div>
                </div>
                <div className="relative transition-all duration-400 flex flex-5 justify-self-start gap-3.5" ref={container}>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                    <VideoCard src={'https://www.youtube.com/embed/i1ReLb9xrJw?si=DhWNDqwgkylnSaYZ?autoplay=1&mute=1'}/>
                </div>
            </div>
        </section>
    );
}

export default VideoSlider;