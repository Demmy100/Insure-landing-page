import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { navMenu } from '../constants'
import close from '../images/icon-close.svg'
import menu from '../images/icon-hamburger.svg'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
   <nav className='flex justify-between items-center sm:px-16 px-8 py-6 relative'>
    <img src={logo} alt="" />
    <ul className='list-none sm:flex hidden'>
        {navMenu.map((menu,index) => (
            <li key={menu.id} className='font-poppins font-normal cursor-pointer hover:text-darkViolet text-[16px] text-grayishBlue ml-4'>{menu.title}</li>
        ))}
         <button className='sm:block hidden ml-4 text-[16px] hover:bg-darkViolet hover:text-white text-darkViolet border-2 border-veryDarkViolet -mt-2 px-[10px] py-[5px]'>VIEW PLANS</button>
    </ul>
   <div className='sm:hidden flex flex-1 justify-end items-center'>
    <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle((prev) => !prev)} className='cursor-pointer'/>
    <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute py-12 z-[1] top-20 bg-veryDarkViolet right-0 w-[100vw] h-[83vh]`}>
        <div className='image5'/>
    <ul className='list-none flex-1 justify-start flex-col items-center flex'>
        {navMenu.map((menu,index) => (
            <li key={menu.id} className='font-poppins font-normal text-[16px] sm:text-grayishBlue text-veryLightGray'>{menu.title}</li>
        ))}
         <button className='block ml-4 text-[16px] sm:text-darkViolet text-veryLightGray border-2 sm:border-veryDarkViolet border-veryLightGray sm:-mt-2 mt-2 px-[10px] py-[5px]'>VIEW PLANS</button>
    </ul>
    </div>
   </div>
   </nav>
  )
}

export default Navbar
