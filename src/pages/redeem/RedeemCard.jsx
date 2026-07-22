function RedeemCard() {
    return (
        <div className="bg-white rounded-md p-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, beatae quae</h1>
            <button className="font-bold text-[15px] md:text-[17px] px-2 py-1 m-auto block border-2 border-[crimson] rounded-lg hover:bg-[crimson] hover:text-white cursor-pointer transition duration-300">Reddem Now</button>
            <div className="grid text-center font-bold leading-5 mt-0.5">
                <p>Post on <span className="text-[blue] underline">01/07/2026</span></p>
                <p>Expire on <span className="text-[blue] underline">01/12/2026</span></p>
            </div>
        </div>
    );
}

export default RedeemCard;