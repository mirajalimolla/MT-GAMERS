import { useEffect, useRef, useState } from "react";
import VideoCard from "./homecomponent/VideoCard";
import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";

function VideoSlider() {
    const container = useRef(null);
    // const [position, setPosition] = useState(0);
    let position = 0;

    // Move Left
    const moveLeft = (e) => {
        if(position >= 0) {
            e.target.style.display="none";            
            return;
        }
        position += 20;
        container.current.style.left = `${position}rem`;
        console.log(position);
    }
    
    // Move Right
    const moveRight = () => {
        position -= 20;
        container.current.style.left = `${position}rem`;
        console.log(position);
    }

    return (
        <section className="bg-[#100101fa]">
            <div className="relative py-2 px-3">
                <div className="absolute flex justify-between w-full top-1/2 -translate-y-1/2 z-40">
                    <div onClick={(e) => moveLeft(e)} className="bg-[#4a1515de] text-gray-400 p-3 cursor-pointer">
                        <PiLessThanBold fontSize={40} />
                    </div>
                    <div onClick={() => moveRight()} className="bg-[#4a1515de] text-gray-400 p-3 cursor-pointer mr-6">
                        <PiGreaterThanBold fontSize={40} />
                    </div>
                </div>
                <div className="relative transition-all duration-400 left-0 flex gap-3.5" ref={container}>
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        </section>
    );
}

export default VideoSlider;