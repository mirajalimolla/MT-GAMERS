import { Link } from "react-router-dom";

function Video() {
    return (
        <section>
            <div className="p-1">
                <div className="m-auto w-fit grid place-items-center">
                    <img src="../src/assets/mtGamers.png" className="h-40 w-40 object-cover rounded-full border-6 border-[crimson]" />
                    <Link to={"https://www.youtube.com/@mtgamersrk"} target="_blank"><button className="bg-[crimson] text-white px-3 py-2 mt-1 rounded-lg cursor-pointer font-bold">Visit Channel</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Video;