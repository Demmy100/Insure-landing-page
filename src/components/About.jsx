import React from 'react'
import { abouts } from '../constants'

const About = () => {
  return (
    <div className='flex flex-col sm:items-start w-full items-center relative sm:px-16 px-8  py-6 sm:mt-60 mt-24'>
      <div className='line2 sm:flex hidden'/>
      <h1 className='font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[40px] leading-[30px] text-veryDarkViolet'>We’re different</h1>
      <div className='flex justify-between sm:flex-row flex-col gap-10 items-center mt-10'>
        {abouts.map((about,index) => (
            <div key={about.id} className={`flex flex-col sm:items-start items-center max-w-[450px] ${index === abouts.length + 1 ? 'mr-10' : 'mr-0'}`}>
                <img src={about.img} alt="" />
                <h3 className='font-poppins font-semibold text-veryDarkViolet my-2 text-[18px]'>{about.title}</h3>
                <p className='font-poppins font-normal sm:text-left text-center max-w-[370px] text-grayishBlue'>{about.content}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default About
