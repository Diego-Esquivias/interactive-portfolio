import React from 'react'
import Image from "next/image";

const aboutMe = () => {
  return (
    <>
    <div className="text-center">
      <span>
      About Me • About Me •  About Me • About Me • 
      </span>
    </div>

    <div className="text-center">
      <span>
      Get to Know Me • Get to Know Me • Get to Know Me • 
      </span>
    </div>

    {/* Profile of Me */}
    <div className='grid grid-cols-2 grid-rows-2 gap-8'>
      <div className='text-center'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
        alt="placeholder Image"
        width={200}
        height={200}
        className="m-auto rounded-full border-2 border-[#6D696A]"
        />
      </div>
      {/* Education */}
      <div className='text-right w-3/4 mx-auto'>
        <h1 className='text-3xl font-extrabold text-[#D8B4A6]'>Education</h1>
        <hr className='' />
        <p className='text-lg text-[#D8B4A6]'>2021-2025</p>
        <p className='text-lg'>Sunnyslope Highschool</p>
        <p className='text-lg text-[#D8B4A6]'>2023-2025</p>
        <p className='text-lg'>West-MEC Northeast Campus</p>
      </div>
      {/* Description of Me */}
      <div className='text-xl text-center border border-[#6D696A] p-5 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl w-3/4 mx-auto'>
            <p>Hi, I'm Diego, a passionate web developer with a focus on creating intuitive and dynamic user experiences. I specialize in front-end development, working with modern tools like React, JavaScript, Tailwind, and CSS to build responsive, user-friendly websites.</p>
      </div>
      {/* Work Experience */}
      <div className='text-right w-3/4 mx-auto'>
        <h1 className='text-3xl font-extrabold text-[#D8B4A6]'>Experience</h1>
        <hr className='' />
        <p className='text-lg text-[#D8B4A6]'>2021-2023</p>
        <p className='text-lg'>Interior/Exterior Car Detailer</p>
        <p className='text-lg text-[#D8B4A6]'>2021-2025</p>
        <p className='text-lg'>Assistant Soccer Coach</p>
      </div>
    </div>
    </>
  )
}

export default aboutMe

