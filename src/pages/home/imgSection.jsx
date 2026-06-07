import { useEffect, useState } from "react";
import coverBg from "../../assets/image_bg2.png";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";

function ImgSection() {
    let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];
    const [url, setUrl] = useState(0);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setUrl(images[index]);
            index++;
            if (index > (images.length - 1)) index = 0;
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="h-125 relative">
            <img src={coverBg} className="absolute max-h-full w-screen object-cover " />
            <img src={url} className="max-h-full w-screen object-cover " />
        </section>
    );
}

export default ImgSection; 