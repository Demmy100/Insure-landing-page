import React from 'react'
import logo from '../images/logo.svg'
import { footerLinks, socials } from '../constants'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center w-full items-center mt-10 px-16 py-6 bg-veryLightGray relative'>
      <div className='sm:flex hidden image3'/>
      <div className='sm:hidden flex image9'/>
      <div className='flex justify-between sm:flex-row flex-col items-center w-full'>
        <div className='flex flex-1'><img src={logo} alt="logo"/></div>
        <div className='flex gap-4 sm:mt-0 mt-4'>
            {socials.map((social) => (
                <img key={social.id} src={social.img} alt='' className='cursor-pointer'/>
            ))}
        </div>
      </div>
      <hr className='sm:w-full w-[50%] border-1 border-[#bbb] mt-4'/>
      <div className='flex justify-between sm:flex-row flex-col sm:items-start items-center w-full mt-10'>
        {footerLinks.map((footerlink) => (
            <div key={footerlink.key} className='flex flex-col cursor-pointer'>
                <h4 className='font-poppins sm:text-left text-center font-normal text-grayishBlue'>{footerlink.title}</h4>
                <ul className='list-none mt-2'>
                    {footerlink.links.map((link) => (
                        <li key={link.id} className='font-poppins hover:underline sm:text-left text-center text-[14px] font-normal text-veryDarkViolet'>{link.name}</li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
