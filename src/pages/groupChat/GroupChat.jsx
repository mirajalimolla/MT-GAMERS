import { useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaBars, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function GroupChat() {
    const menu = useRef(null);

    const openSideMenu = () => {
        menu.current.style.left = "0%";
    }

    const closeSideMenu = () => {
        menu.current.style.left = "-100%";
    }

    return (
        <section style={{ background: "linear-gradient(#00000063, #00000069), url(/src/assets/groupChat.jpg) no-repeat", backgroundSize: "cover" }} className="relative w-full h-screen">
            <div onClick={openSideMenu} className="absolute left-4 top-4 bg-gray-300 w-fit p-3 rounded-full cursor-pointer">
                <FaBars size={35} />
            </div>
            <div ref={menu} className="absolute w-1/2 h-full -left-full transition-all duration-600 bg-black text-white">
                <CgClose onClick={closeSideMenu} size={40} fontWeight={600} className="float-end m-5 cursor-pointer" />
                <div className="grid place-items-center mt-20">
                    <ul className="text-2xl font-semibold grid gap-5 text-center">
                        <NavLink to={'/'}><li className="after:h-0.5 after:w-0 after:mt-0.5 after:m-auto transition-all duration-300 after:transition-all after:duration-400 hover:after:w-full hover:text-[crimson] after:bg-[crimson] after:rounded-2xl after:block cursor-pointer">HOME</li></NavLink>
                        <NavLink to={'redeem'}><li className="after:h-0.5 after:w-0 after:mt-0.5 after:m-auto transition-all duration-300 after:transition-all after:duration-400 hover:after:w-full hover:text-[crimson] after:bg-[crimson] after:rounded-2xl after:block cursor-pointer">REDEEM</li></NavLink>
                        <NavLink to={'profile'}><li className="after:h-0.5 after:w-0 after:mt-0.5 after:m-auto transition-all duration-300 after:transition-all after:duration-400 hover:after:w-full hover:text-[crimson] after:bg-[crimson] after:rounded-2xl after:block cursor-pointer">PROFILE</li></NavLink>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="w-[90%] h-screen m-auto">
                <div className="h-[90vh]">
                    <div className="w-[90%] h-full m-auto pt-3 overflow-y-scroll grid gap-3">
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white w-fit py-1 pl-1.5 pr-4 rounded-full">
                            <FaUser size={35} className="p-2 bg-gray-300 rounded-full cursor-pointer" />
                            <div className="leading-5 text-sm">
                                <div className="flex items-center">
                                    <b>Miraj</b>
                                    <BsThreeDots size={20} className="ml-2.5 cursor-pointer" />
                                </div>
                                <p>This is a Messege</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-[1.5vh] h-[8vh]">
                    <input type="text" placeholder="Enter your massage" className="border-2 border-white text-white w-full rounded-l-3xl pl-3 p-2 text-md outline-0 font-semibold" />
                    <button className="bg-white text-md font-bold rounded-r-full py-2 pl-2 pr-4 cursor-pointer">Submit</button>
                </div>
            </div>
        </section>
    );
}

export default GroupChat;