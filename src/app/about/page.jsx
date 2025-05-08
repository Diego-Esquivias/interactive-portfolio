import React from 'react'
import Image from "next/image";
import Link from "next/link";

const aboutMe = () => {
  return (
    <>

    <div className="marquee font-bold">
      <div className="marquee__inner " aria-hidden="true">
        <span>About Me • </span>
        <span>About Me • </span>
        <span>About Me • </span>
        <span>About Me • </span>
      </div>
    </div>

    <div className="marquee font-bold">
      <div className="marquee__innerv2 text-[#D8B4A6]" aria-hidden="true">
        <span>Get to Know Me • </span>
        <span>Get to Know Me • </span>
        <span>Get to Know Me • </span>
        <span>Get to Know Me • </span>
      </div>
    </div>

    <hr className='border-gray-800 mt-10 mb-15' />

    {/* Section 1 */}
    {/* Profile of Me */}
    <div className='grid grid-cols-2 grid-rows-2 gap-8'>
      <div className='text-center mb-4' data-aos="flip-down" data-aos-duration="2000">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746477429/IMG_4633_hir7iu.jpg"}
        alt="placeholder Image"
        width={300}
        height={300}
        className="m-auto rounded-full border-2 border-[#6D696A]"
        />
      </div>
      {/* Education */}
      <div className='grid justify-items-end w-3/4 mx-auto' data-aos="fade-down-left" data-aos-duration="2000">
        <h1 className='text-4xl font-extrabold text-[#D8B4A6]'>Education</h1>
        <hr className='border-3 w-1/2 rounded-full my-2' />
        <p className='text-2xl text-[#D8B4A6]'>2021-2025</p>
        <p className='text-2xl'>Sunnyslope Highschool</p>
        <p className='text-2xl text-[#D8B4A6]'>2023-2025</p>
        <p className='text-2xl'>West-MEC Northeast Campus</p>
      </div>
      {/* Description of Me */}
      <div  data-aos="fade-down-right" data-aos-duration="2000">
        <div className='text-2xl text-center p-5 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 w-3/4 mx-auto'>
              <p>Hi, I'm Diego, a passionate web developer with a focus on creating intuitive and dynamic user experiences. I specialize in front-end development, working with modern tools like React, JavaScript, Tailwind, NextJS, and CSS to build responsive, user-friendly websites.</p>
        </div>
      </div>
      {/* Work Experience */}
      <div className='grid justify-items-end w-3/4 mx-auto' data-aos="fade-up-left" data-aos-duration="2000">
        <h1 className='text-4xl font-extrabold text-[#D8B4A6]'>Experience</h1>
        <hr className='border-3 w-1/2 rounded-full my-2' />
        <p className='text-2xl text-[#D8B4A6]'>2021-2023</p>
        <p className='text-2xl'>Interior/Exterior Car Detailer</p>
        <p className='text-2xl text-[#D8B4A6]'>2021-2025</p>
        <p className='text-2xl'>Assistant Soccer Coach</p>
      </div>
    </div>

    <br />
    <br />

    {/* Section 2 */}
    <div className='w-full bg-[#D8B4A6] grid grid-cols-2 grid-rows-1 place-items-center'>
      <div className='text-black font-extrabold text-8xl text-center p-20'>
        Why I Choose To Pursue A Career In Coding
      </div>
      <div data-aos="zoom-in-left" data-aos-duration="2000">
        <div className='text-2xl bg-black p-5 w-3/4 mx-auto rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2'>
          I have always loved using technology since I was a kid with my first console being the Nintendo Wii. As I got older I became fasinated with designing the front end aspects of webpages and wanting to make a game. I then joined the West-MEC coding program in hopes to further explore these interests of mine and to see what stuff can I learn that I wouldn't have known on my own. Overall, I chose to pursue a career in coding because it aligns with my interests and can push me to constantly improve on not only my technical skills, but on who I am as a leader and teammate.
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section 3 */}
    <div>
      <div className='w-full grid grid-cols-2 grid-rows-1 place-items-center'>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <div className='text-2xl bg-black p-5 w-3/4 mx-auto rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1'>
            On my free time I do a variety of things. One of the things I do the most on my free time is listen to music from artists such as Kendrick Lamar, ASAP Rocky, J Cole, Travis Scott, and much more. Another thing I do with my free time is play video games with friends and family with the games being Fortnite, Marvel Rivals, Minecraft, Brawl Stars, Clash Royale, and many more. FInally you can find me spending my free time reading comic books from my favorite Marvel characters like Spider-Man, Moonknight, Ghost Rider, and more. 
          </div>
        </div>
        <div className='font-extrabold text-8xl text-center p-10'>
          What I Do When I Have Free Time
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section 4 */}
    <div className='w-full grid grid-cols-3 grid-rows-1 place-items-center'>
      <div className='text-center text-3xl'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
        alt="placeholder Image"
        width={300}
        height={300}
        className="m-auto rounded-2xl"
        />
        <br />
        Title of Hobby
      </div>
      <div className='text-center text-3xl'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
        alt="placeholder Image"
        width={300}
        height={300}
        className="m-auto rounded-2xl"
        />
        <br />
        Title of Hobby
      </div>
      <div className='text-center text-3xl'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
        alt="placeholder Image"
        width={300}
        height={300}
        className="m-auto rounded-2xl"
        />
        <br />
        Title of Hobby
      </div>
    </div>

    <br />
    <br />
    <br />

    {/* Contact Section */}
    <h1 className='m-auto text-center text-4xl'>Have Any Questions?</h1>
    <div className='text-center mx-auto w-3/4 mt-10 text-2xl'>
      <Link href={'/contact'} className='bg-[#D8B4A6] text-black p-4 rounded-3xl font-bold transform transition-all duration-300 ease-in-out hover:bg-[#6D696A]'>
        Contact Me
      </Link>
    </div>
    </>
  )
}

export default aboutMe

