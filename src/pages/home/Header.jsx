import { useEffect, useState } from 'react';
import logo from '../../assets/mtGamers.png'
function Header() {
    // document.addEventListener("scroll", function(e){
    //     console.log(e);
    // })
    
    return (
        <nav className='w-screen flex items-center justify-between font-bold text-[18px] shadow-[0px_7px_10px_#761313] text-[#877979] bg-[#323232] py-3 px-25 z-50'>
            <div>
                <ul className='flex gap-7'>
                    <li className='grid after:h-0.5 after:w-0 hover:after:w-full transition-all duration-300 after:transition-[width] after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer text-[crimson]'>HOME</li>
                    <li className='grid after:h-0.5 after:w-0 hover:after:w-full transition-all duration-300 after:transition-[width] after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>GROUP CHAT</li>
                </ul>
            </div>
            <div>
                <img src={logo} loading='lazy' className='h-25' />
            </div>
            <div>
                <ul className='flex gap-7'>
                    <li className='grid after:h-0.5 after:w-0 hover:after:w-full transition-all duration-300 after:transition-[width] after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>VIEDO</li>
                    <li className='grid after:h-0.5 after:w-0 hover:after:w-full transition-all duration-300 after:transition-[width] after:duration-300 after:bg-[crimson] after:m-auto cursor-pointer hover:text-[crimson]'>LOG IN</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;