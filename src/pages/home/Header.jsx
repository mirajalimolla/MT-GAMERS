import { useEffect, useState } from 'react';
import logo from '../../assets/mtGamers.png'
import { NavLink } from 'react-router-dom';

function Header() {
    // document.addEventListener("scroll", function(e){
    //     console.log(e);
    // })
    
    return (
        <nav className='w-screen flex items-center justify-between font-bold text-[18px] shadow-[0px_7px_10px_#761313] text-[#877979] bg-[#323232] py-3 px-25 z-50'>
            <div>
                <ul className='flex gap-7'>
                    <NavLink to={'/'}><li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer text-[crimson]'>HOME</li></NavLink>
                    <NavLink to={'/groupChat'}><li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>GROUP CHAT</li></NavLink>
                </ul>
            </div>
            <div>
                <img src={logo} loading='lazy' className='h-25' />
            </div>
            <div>
                <ul className='flex gap-7'>
                    <NavLink to={'/video'}> <li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>VIEDO</li></NavLink>
                    <NavLink to={'/login'}> <li className='grid after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>LOG IN</li></NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Header;