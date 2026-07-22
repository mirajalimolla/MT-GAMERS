import { useEffect, useState } from 'react';
import logo from '../../assets/mtGamers.png'
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

function Header() {
    const [sideMenu, setSideMenu] = useState(false);

    return (
        <nav className='w-screen shadow-[0px_7px_10px_#761313] text-[#877979] bg-[#323232] sm:py-3 py-2 z-50'>
            <div className='relative w-[95%] sm:w-[90%] lg:w-[80%] m-auto flex items-center justify-between font-bold text-[16px] sm:text-[18px]'>
                <div className='hidden sm:block'>
                    <ul className='flex gap-7'>
                        <NavLink to={'/'}><li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer text-[crimson]'>HOME</li></NavLink>
                        <NavLink to={'/groupChat'}><li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>GROUP CHAT</li></NavLink>
                    </ul>
                </div>
                <div className={`${sideMenu ? "hidden" : ""} block`}>
                    <img src={logo} loading='lazy' className='sm:h-25 sm:w-25 h-15 min-w-fit object-cover' />
                </div>
                <div className='hidden sm:block'>
                    <ul className='flex gap-7'>
                        <NavLink to={'/video'}> <li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>VIEDO</li></NavLink>
                        <NavLink to={'/login'}> <li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>LOG IN</li></NavLink>
                    </ul>
                </div>

                <div onClick={() => setSideMenu(!sideMenu)} className="sm:hidden block absolute right-5">
                    {sideMenu ? <CgClose size={20} /> : <FaBars size={20} />}
                </div>

                <div className={`relative ${sideMenu ? "left-[0%]" : "left-[-106%]"} pl-2 transition-all duration-500 sm:hidden block`}>
                    <ul className='flex gap-5 text-sm'>
                        <NavLink to={'/'}><li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer text-[crimson]'>HOME</li></NavLink>
                        <NavLink to={'/groupChat'}><li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>GROUP CHAT</li></NavLink>
                        <NavLink to={'/video'}> <li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>VIEDO</li></NavLink>
                        <NavLink to={'/login'}> <li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>LOG IN</li></NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;