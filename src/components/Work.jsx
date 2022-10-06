import React from 'react'

const Work = () => {
  return (
    <div className='flex justify-center items-center sm:px-16 px-8 py-6 w-full relative'>
      <div className='bg-darkViolet w-full flex sm:flex-row flex-col justify-between items-center px-8 sm:py-14 py-20'>
        <h2 className='font-poppins flex sm:text-left text-center flex-1 font-semibold sm:text-[40px] text-[20px] sm:leading-[40px] leading-[30px]  text-veryLightGray'>Find out more<br /> about how we work</h2>
        <button className='text-[16px] flex items-center cursor-pointer hover:bg-white hover:text-darkViolet text-veryLightGray border-2 border-veryLightGray mt-4 px-[10px] py-[5px]'>HOW WE WORK</button>
        <div className='sm:flex hidden image4'/>
        <div className='sm:hidden flex image8'/>
      </div>
    </div>
  )
}

export default Work
