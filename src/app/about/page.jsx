import React from 'react'
import Image from "next/image";
import Link from "next/link";

const aboutMe = () => {
  return (
    <>

    <div className="marquee font-bold">
      <div className="marquee__inner " aria-hidden="true">
        <span> Designer. Developer. Doer.</span>
        <span> Designer. Developer. Doer.</span>
        <span> Designer. Developer. Doer.</span>
        <span> Designer. Developer. Doer.</span>
      </div>
    </div>

    <div className="marquee font-bold">
      <div className="marquee__innerv2 text-[#D8B4A6]" aria-hidden="true">
        <span> Building with purpose, growing with passion.</span>
        <span> Building with purpose, growing with passion.</span>
        <span> Building with purpose, growing with passion.</span>
        <span> Building with purpose, growing with passion.</span>
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
        <div className='text-2xl text-center font-bold p-5 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 w-3/4 mx-auto'>
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
        <div className='text-2xl text-center bg-black p-5 w-3/4 mx-auto rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2 font-bold'>
          My passion for technology began at a young age, starting with my first console—the Nintendo Wii. Over time, this interest evolved into a fascination with front-end web design and game development. To explore these areas further, I enrolled in the West-MEC coding program, where I've been able to deepen my knowledge and gain exposure to concepts and tools I may not have discovered on my own. Pursuing a career in coding allows me to align my work with what I love while continuously challenging myself to grow—not just as a developer, but also as a leader and collaborative teammate.
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section 3 */}
    <div>
      <div className='w-full grid grid-cols-2 grid-rows-1 place-items-center'>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <div className='text-2xl text-center bg-black p-5 w-3/4 mx-auto rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 font-bold'>
          In my free time, I enjoy a range of activities that help me unwind and stay inspired. I often listen to music from artists such as Kendrick Lamar, A$AP Rocky, J. Cole, Travis Scott, and others whose creativity influences my own. I also enjoy playing video games with friends and family—favorites include Fortnite, Marvel Rivals, Minecraft, Brawl Stars, and Clash Royale. Additionally, I'm an avid reader of comic books, especially stories featuring Marvel characters like Spider-Man, Moon Knight, and Ghost Rider.
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
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746821246/IMG_3098_g0gj7f.png"}
        alt="placeholder Image"
        width={300}
        height={300}
        className="m-auto rounded-2xl border-white border-1"
        />
        <br />
        Collect
      </div>
      <div className='text-center text-3xl'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746821467/mixcollage-11-dec-2024-08-46-am-3822_tdo59e.avif"}
        alt="placeholder Image"
        width={275}
        height={275}
        className="m-auto rounded-2xl"
        />
        <br />
        Game
      </div>
      <div className='text-center text-3xl'>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1746824424/asatb73307_mm4ghm.webp"}
        alt="placeholder Image"
        width={300}
        height={300}
        className="m-auto rounded-2xl"
        />
        <br />
        Music
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

