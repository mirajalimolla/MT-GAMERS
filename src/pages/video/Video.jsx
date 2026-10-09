import { useState } from "react";
import { Link } from "react-router-dom";

function Video() {
    const [youtubeInfo, setYoutubeInfo] = useState("Loading...");
    const [channelData, setChannelData] = useState([]);

    async function youtubeFetch() {
        try {
            const API_KEY = "AIzaSyBpGrr30vgFEBKuaBGkrulPToBz9brjLik";
            const CHANNEL_ID = "UC-eWMHHZfutLlVJvQFGe6Xw";
            const url = `https://www.googleapis.com/youtube/v3/channels` + `?part=snippet,statistics` + `&id=${CHANNEL_ID}` + `&key=${API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                console.log("Status:", response.status);
                console.log("Error:", data.error);
                return;
            }

            console.log(data);
        } catch (error) {
            console.error("Error fetching YouTube data:", error);
            setYoutubeInfo("Er`ror loading data");
        }
    }
    // youtubeFetch();

    return (
        <section>
            <div className="p-1">
                {/* <div className="m-auto w-fit grid place-items-center">
                    <img src={youtubeInfo.thumbnails} className="h-40 w-40 object-cover rounded-full border-6 border-[crimson]" />
                    <Link to={"https://www.youtube.com/@mtgamersrk"} target="_blank"><button className="bg-[crimson] text-white px-3 py-2 mt-1 rounded-lg cursor-pointer font-bold">{youtubeInfo.title}</button></Link>
                </div> */}
                <div>
                    <h1>{youtubeInfo.subscriberCount}</h1>
                </div>
            </div>
        </section>
    );
}

export default Video;