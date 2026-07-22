// import React from "react";
import { FaDiscord, FaFacebook, FaGreaterThan, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-black text-gray-400 pt-10 pb-5 sm:py-15">
            <div className="w-[95%] md:w-[90%] xl:w-[80%] m-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">MT GAMERS</h1>
                    <p className=" my-2">This website based on gaming so if you loved watch and play games so visit my social media handels I will mestioned in bolow we will see there</p>
                </div>
                <hr />
                <div className="flex flex-wrap justify-center items-baseline gap-7 lg:gap-10 mt-8">
                    <div className="grid place-items-center">
                        <h3 className="text-3xl font-semibold">LINKS</h3>
                        <div className="flex gap-5 font-semibold mt-2">
                            <ul>
                                <Link to={'/'}> <li className="flex items-center cursor-pointer hover:text-blue-600"><FaGreaterThan fontSize={15} /> HOME</li> </Link>
                                <Link to={'/video'}> <li className="flex items-center cursor-pointer mt-1 hover:text-blue-600"><FaGreaterThan fontSize={15} /> VIDEO</li> </Link>
                            </ul>
                            <ul>
                                <Link to={'/login'}><li className="flex items-center cursor-pointer hover:text-blue-600"><FaGreaterThan fontSize={15} /> LOGIN</li> </Link>
                                <Link to={'/signup'}><li className="flex items-center cursor-pointer mt-1 hover:text-blue-600"><FaGreaterThan fontSize={15} /> SIGN UP</li></Link>
                            </ul>
                        </div>
                    </div>

                    <div className="grid place-items-center">
                        <h3 className="text-3xl font-semibold">FOLLOW HERE</h3>
                        <div className="flex gap-3 text-white mt-2">
                            <Link to={'https://facebook.com'} target="_blank"> <FaFacebook fontSize={35} className="hover:text-blue-600 cursor-pointer" /></Link>
                            <Link to={'https://youtube.com'} target="_blank"> <FaYoutube fontSize={35} className="hover:text-red-600 cursor-pointer" /></Link>
                            <Link to={'https://instagram.com'} target="_blank"> <FaInstagram fontSize={35} className="hover:text-pink-600 cursor-pointer" /></Link>
                            <Link to={'https://discord.com'} target="_blank"> <FaDiscord fontSize={35} className="hover:text-indigo-500 cursor-pointer" /></Link>
                        </div>
                    </div>

                    <div className="grid place-items-center">
                        <h3 className="text-3xl font-semibold mb-1">CONTACT ME</h3>
                        <p>Email - <b>mtgamersofficialrk@gmail.com</b></p>
                    </div>
                </div>
                <p className="text-center font-bold text-xl mt-7 sm:mt-10">ⓒcopyright</p>
            </div>
        </footer>
    );
}

export default Footer;