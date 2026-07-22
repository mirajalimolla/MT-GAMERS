import { FaBars} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { useRef, useState } from "react";

function SidebarMenu() {
    const menu = useRef(null);

    const openSideMenu = () => {
        menu.current.style.left = "0%";
    }

    const closeSideMenu = () => {
        menu.current.style.left = "-100%";
    }

    return (
        <>
            <div onClick={openSideMenu} className={"fixed left-4 top-2 bg-gray-300 w-fit p-3 rounded-full cursor-pointer z-50"}>
                <FaBars size={25} />
            </div>
            <div ref={menu} className="absolute z-50 sm:w-1/2 w-[80%] h-full -left-full transition-all duration-600 bg-black text-white">
                <CgClose onClick={closeSideMenu} size={40} fontWeight={600} className="float-end m-5 cursor-pointer" />
                <div className="grid place-items-center mt-20">
                    <ul className="sm:text-2xl font-semibold grid gap-5 text-center">
                        <NavLink to={'/'}><li className="after:h-0.5 after:w-0 after:mt-0.5 after:m-auto transition-all duration-300 after:transition-all after:duration-400 hover:after:w-full hover:text-[crimson] after:bg-[crimson] after:rounded-2xl after:block cursor-pointer">HOME</li></NavLink>
                        <NavLink to={'/groupChat'}><li className="after:h-0.5 after:w-0 after:mt-0.5 after:m-auto transition-all duration-300 after:transition-all after:duration-400 hover:after:w-full hover:text-[crimson] after:bg-[crimson] after:rounded-2xl after:block cursor-pointer">CHAT</li></NavLink>
                        <NavLink to={'/redeem'}><li className="after:h-0.5 after:w-0 after:mt-0.5 after:m-auto transition-all duration-300 after:transition-all after:duration-400 hover:after:w-full hover:text-[crimson] after:bg-[crimson] after:rounded-2xl after:block cursor-pointer">REDEEM</li></NavLink>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SidebarMenu;