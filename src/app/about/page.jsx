import React from 'react'
import Image from "next/image";
import Link from "next/link";

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

    {/* Section 1 */}
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
      <div className='text-xl text-center p-5 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 w-3/4 mx-auto'>
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

    <br />
    <br />

    {/* Section 2 */}
    <div className='w-full bg-[#D8B4A6] grid grid-cols-2 grid-rows-1 place-items-center'>
      <div className='text-black font-extrabold text-7xl text-center p-10'>
        Why I Choose To Pursue A Career In Coding
      </div>
      <div>
        <div className='text-2xl bg-black p-5 w-3/4 mx-auto rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section 3 */}
    <div>
      <div className='w-full grid grid-cols-2 grid-rows-1 place-items-center'>
        <div>
          <div className='text-2xl bg-black p-5 w-3/4 mx-auto rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
          </div>
        </div>
        <div className='font-extrabold text-7xl text-center p-10'>
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
    <div className='text-center mx-auto w-3/4'>
      <Link href={'/'} className='bg-[#D8B4A6] text-black'>
        Contact Me
      </Link>
    </div>
    </>
  )
}

export default aboutMe

