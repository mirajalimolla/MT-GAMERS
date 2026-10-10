import { useState } from 'react';
import logo from '../../assets/mtGamers.avif'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

function Header() {
    const [sideMenu, setSideMenu] = useState(false);
    const links = ["HOME", "GROUP CHAT", "VIDEO", "LOG IN"]; // Names for header links

    // Setting routing on every link in header mobile/desktop
    function routeSetting(link) {
        switch (link) {
            case "HOME": return "/";
                break;
            case "GROUP CHAT": return "/groupChat";
                break;
            case "VIDEO": return "/video";
                break;
            case "LOG IN": return "/login";

        }
        console.log(link)
    }

    return (
        <nav className='w-screen shadow-[0px_7px_10px_#761313] text-[#877979] bg-[#323232] sm:py-3 py-2 z-50'>
            <div className='relative w-[95%] sm:w-[90%] lg:w-[80%] m-auto flex items-center justify-between font-bold text-[16px] sm:text-[18px]'>
                {/* This code is for desktop header */}
                <div className='hidden sm:block'>
                    <ul className='flex gap-7'>
                        {
                            links.map((elem, id) => {
                                if (id > 1) return;
                                return (
                                    <NavLink key={id} to={routeSetting(elem)}><li className={`grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer ${elem === "HOME" ? "text-[crimson]" : "hover:text-[crimson]"}`}>{elem}</li></NavLink>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={`${sideMenu ? "hidden" : ""} block`}> {/* This div contain the logo only for desktop header */}
                    <img src={logo} loading='lazy' alt="Logo" className='sm:h-25 sm:w-25 h-15 min-w-fit object-cover' />
                </div>
                <div className='hidden sm:block'>
                    <ul className='flex gap-7'>
                        {
                            links.map((elem, id) => {
                                if (id < 2) return;
                                return (
                                    <NavLink key={id} to={routeSetting(elem)}><li className={`grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer ${elem === "HOME" ? "text-[crimson]" : "hover:text-[crimson]"}`}>{elem}</li></NavLink>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* This code is for mobile sidebar when desktop header will gone */}
                <div onClick={() => setSideMenu(!sideMenu)} className="sm:hidden block absolute right-5">
                    {sideMenu ? <CgClose size={20} /> : <FaBars size={20} />}
                </div>

                <div className={`relative ${sideMenu ? "left-[0%]" : "left-[-106%]"} pl-2 transition-all duration-500 sm:hidden block`}>
                    <ul className='flex gap-5 text-sm'>
                        {
                            links.map((elem, id) => {
                                return (
                                    <NavLink key={id} to={routeSetting(elem)}><li className={`grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer ${elem === "HOME" ? "text-[crimson]" : "hover:text-[crimson]"}`}>{elem}</li></NavLink>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;