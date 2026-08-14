import { Link } from "react-router-dom";

function VideoCard({src, isVideo=true}) {
    return (
        <div className="w-[96vw] sm:w-[47.4vw] md:w-[31.8vw] xl:w-[23.8vw] max-w-full min-h-85 shadow-[0px_0px_12px_#541625]">
            {isVideo ? <iframe height={"100%"} width={"100%"} sc={src}></iframe> : <Link to={"/video"}><h1 className="relative z-50 text-gray-400 h-full w-full flex items-center justify-center text-3xl font-bold">See All</h1></Link>}
        </div>
    );
}

export default VideoCard;