import DetailsCard from "./homecomponent/DetailsCard";
import Heading from "./homecomponent/Heading";
import bgDetail from "../../assets/details.jpg"
import cardLogo1 from "../../assets/mtGamers.png"
import cardLogo2 from "../../assets/freefire.png"
import cardLogo3 from "../../assets/garena_logo.png"

function Details() {
    return (
        <section style={{background:`linear-gradient(rgb(0 0 0 / 63%), rgb(0 0 0 / 28%)), url(/src/assets/details.jpg) no-repeat`, backgroundSize:"cover", backgroundAttachment:"fixed", backgroundPosition:"center center"}} className="py-25 grid place-items-center">
            <div className="w-[90%] sm:w-[85%] xl:w-[70%]">
                <Heading text={"DETAILS FOR ME"}/>
                <div className="mt-10">
                    <DetailsCard cardLogo={cardLogo1} isHeading={true} para={"Hello, fellow survivors! I'm Rahul Khan, a passionate Free Fire gamer. Here, you'll find everything from my latest gameplay highlights to tips and tricks to help you become a Free Fire pro. Whether you're just starting out or looking to sharpen your skills, I'm here to share my journey, strategies, and love for the game. Join me as we explore the battlefield, face intense challenges, and achieve epic victories together. Ready to drop in and dominate? Let's play!"}/>
                    
                    <DetailsCard cardLogo={cardLogo2} addStyle={"my-20"} isReverse={true} para={"Free Fire is a battle royale mobile game developed by 111 Dots Studio and published by Garena in 2017. Known for its fast-paced gameplay and low device requirements, it quickly became one of the most downloaded games globally. In Free Fire, up to 50 players compete on an island to be the last one standing, gathering weapons and equipment. Its frequent updates and events have made it highly popular, especially in Southeast Asia and Latin America."}/>
                    
                    <DetailsCard cardLogo={cardLogo3} para={"Garena is a digital entertainment company headquartered in Singapore, primarily known for its online gaming and eSports operations. Founded in 2009 as part of Sea Limited, Garena publishes and distributes popular games like Free Fire, a leading mobile battle royale game. The company is a major player in the gaming industry across Southeast Asia, Taiwan, and Latin America, offering a platform for gamers and eSports enthusiasts. Garena also organizes gaming events and tournaments, fostering a strong eSports community in its regions of operation."}/>
                </div>
            </div>
        </section>
    );
}

export default Details;