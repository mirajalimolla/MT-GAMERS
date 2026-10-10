import { useEffect, useState } from "react";
import coverBg from "../../assets/image_bg2.avif";
import img1 from "../../assets/1.avif";
import img2 from "../../assets/2.avif";
import img3 from "../../assets/3.avif";
import img4 from "../../assets/4.avif";
import img5 from "../../assets/5.avif";
import img6 from "../../assets/6.avif";
import img7 from "../../assets/7.avif";
import img8 from "../../assets/8.avif";
import img9 from "../../assets/9.avif";
import img10 from "../../assets/10.avif";
import img11 from "../../assets/11.avif";

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
        <section className="relative">
            <img src={coverBg} loading="lazy" alt="Cover up image" className="absolute h-130 w-full object-cover" />
            <img src={url} loading="lazy" alt="Slider image" className="w-screen h-130 object-cover" />
        </section>
    );
}

export default ImgSection; 