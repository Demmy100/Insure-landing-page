import React from 'react'
import intro from '../images/image-intro-desktop.jpg'

const Hero = () => {
  return (
    <div className='w-full sm:px-16 px-0 bg-darkViolet'>
      <div className='flex justify-between sm:flex-row flex-col-reverse items-center'>
        <div className='flex flex-col flex-1 sm:items-start items-center justify-center sm:mt-0 mt-8 py-10 relative z-[0]'>
            <div className='sm:flex hidden line'/>
            <h2 className='font-poppins font-semibold sm:text-left text-center text-[40px] leading-[40px] text-veryLightGray'>Humanizing <br /> your insurance.</h2>
            <p className='font-normal sm:text-left text-center font-poppins text-veryLightGray mt-4 max-w-[470px]'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
            <button className='text-[16px] hover:bg-white hover:text-darkViolet text-veryLightGray border-2 border-veryLightGray mt-4 px-[10px] py-[5px]'>VIEW PLANS</button>
            <div className='sm:flex hidden image'/>
            <div className='sm:hidden flex image6'/>
            <div className='sm:hidden flex image7'/>
        </div>
        <div className='flex flex-1 justify-center relative'>
            <div className='sm:flex hidden image2'/>
            <img src={intro} alt="intro" className='sm:translate-y-[15%] translate-y-[0]'/>
        </div>

        </div>
      
    </div>
  )
}

export default Hero
