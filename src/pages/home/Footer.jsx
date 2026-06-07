// import React from "react";
import { FaDiscord, FaFacebook, FaGreaterThan, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-15">
            <div className="w-[80%] m-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">MT GAMERS</h1>
                    <p className=" my-2">This website based on gaming so if you loved watch and play games so visit my social media handels I will mestioned in bolow we will see there</p>
                </div>
                <hr />
                <div className="flex justify-center items-baseline gap-10 mt-8">
                    <div className="grid place-items-center">
                        <h3 className="text-3xl font-semibold">LINKS</h3>
                        <div className="flex gap-5 font-semibold mt-2">
                            <ul>
                                <li className="flex items-center cursor-pointer hover:text-blue-600"><FaGreaterThan fontSize={15} /> HOME</li>
                                <li className="flex items-center cursor-pointer mt-1 hover:text-blue-600"><FaGreaterThan fontSize={15} /> VIDEO</li>
                            </ul>
                            <ul>
                                <li className="flex items-center cursor-pointer hover:text-blue-600"><FaGreaterThan fontSize={15} /> LOGIN</li>
                                <li className="flex items-center cursor-pointer mt-1 hover:text-blue-600"><FaGreaterThan fontSize={15} /> SIGN UP</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid place-items-center">
                        <h3 className="text-3xl font-semibold">FOLLOW HERE</h3>
                        <div className="flex gap-3 text-white mt-2">
                            <FaFacebook fontSize={35} />
                            <FaYoutube fontSize={35} />
                            <FaInstagram fontSize={35} />
                            <FaDiscord fontSize={35} />
                        </div>
                    </div>

                    <div className="grid place-items-center">
                        <h3 className="text-3xl font-semibold mb-1">CONTACT ME</h3>
                        <p>Email - <b>mtgamersofficialrk@gmail.com</b></p>
                    </div>
                </div>
                <p className="text-center font-bold text-xl mt-10">ⓒcopyright</p>
            </div>
        </footer>
    );
}

export default Footer;