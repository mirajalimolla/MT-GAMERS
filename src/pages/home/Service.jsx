import Heading from "./homeComponent/Heading";

function Service() {
    // Service info provider
    const service = [
        {
            heading: "Videos",
            description: "I am posting videos on some social media like YouTube Facebook Instagram I will post 4 videos a week. My video quality is awesome I use the language to speak in my video is mostly Hindi but sometimes I use the Bengali language to commentry on my video go my channel and check it"
        },
        {
            heading: "Live Stream",
            description: "I go live every day but sometimes I go live 2-3 times a day. In my live, I play free fire game squad and solo depending on my mood and my subscriber's demand. Sometimes I play Free Fire Squad with my subscribers. I have trained my subscribers on how to push their rank and entertain there"
        },
        {
            heading: "Competition",
            description: "On my YouTube channel, I do competition for my subscribers. I make a custom for the competition. Anyone can join our customs and win the competition. But the criteria is to be my subscriber and the custom win price is announced on my YouTube channel so go and subscribe my channel"
        },
        {
            heading: "Giveaway",
            description: "I do giveaways for my subscribers through this website and the full criteria to win the giveaways are mentioned on the redeem page go and check it out. How to go - If you don't have an account please create an account on our website then login to your account than group chat than click the menu than redeem"
        },
    ];

    return (
        <section className="bg-neutral-800 w-screen py-20">
            <Heading text={"OUR SERVICE"} />

            <div className="flex flex-wrap items-center justify-center gap-3 mt-5 mx-auto">
                {
                    service.map((elem, id) => {
                        return (
                            <div key={id} className="w-70 h-83 border-2 border-white bg-[repeating-linear-gradient(45deg,#702130,transparent_100px)] rounded-md py-3 px-5">
                                <h3 className="text-2xl text-center pb-1 font-extrabold text-[#cbcbcb]">{elem.heading}</h3>
                                <p className="text-[#8d8c8c] text-md font-medium text-center">{elem.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Service;