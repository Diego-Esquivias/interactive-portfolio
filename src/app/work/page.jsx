import React from 'react'
import Image from "next/image";

const page = () => {
  return (
    <>
    {/* <div className="marquee font-bold">
      <div className="marquee__inner " aria-hidden="true">
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
        <span>My Work • </span>
      </div>
    </div> */}

    <div className="text-center">
      <span>
      Past Projects • Past Projects • Past Projects • 
      </span>
    </div>

    <br />
    <hr />
    <br />

    {/* Section Main Version */}
    <div className='w-full grid grid-cols-2 grid-rows-1 justify-items-center'>
      <div>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
        alt="placeholder Image"
        width={400}
        height={400}
        className="m-auto rounded-2xl"
        />
      </div>
      <div className='grid justify-items-start'>
        <h1 className='text-4xl font-bold text-[#D8B4A6]'>Project Name</h1>
        <hr />
        <h2 className='text-2xl text-[#D8B4A6]'>2021-2025</h2>

        <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1 mt-35'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>
    </div>

    <br />
    <br />

    {/* Section Secondary Version */}
    <div className='w-full bg-[#D8B4A6] grid grid-cols-2 grid-rows-1 place-items-center'>
      <div className='grid justify-items-end'>
        <h1 className='text-4xl font-bold text-black mt-10'>Project Name</h1>
        <hr />
        <h2 className='text-2xl text-black'>2021-2025</h2>

        <div className='text-2xl bg-black p-5 w-3/4 rounded-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v2-move shadow-v2 mt-35 mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nostrum exercitationem assumenda, illum est atque omnis asperiores inventore. Repellat earum ullam consectetur vero, sunt voluptatum magni accusantium expedita a esse doloremque 
        </div>
      </div>
      <div>
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
        alt="placeholder Image"
        width={400}
        height={400}
        className="m-auto rounded-2xl"
        />
      </div>
    </div>
    </>
  )
}

export default page