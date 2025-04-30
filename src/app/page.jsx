"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>

    {/* Main Content */}
    <br />

    <div className="marquee font-bold">
      <div className="marquee__inner " aria-hidden="true">
        <span>Welcome To My Portfolio • </span>
        <span>Welcome To My Portfolio • </span>
        <span>Welcome To My Portfolio • </span>
        <span>Welcome To My Portfolio • </span>
      </div>
    </div>

    <div className="text-center">
      <span>
      Future Software Engineer • Future Software Engineer • Future Software Engineer •
      </span>
    </div>

      
      <hr />
      {/* Place for the image Scroll thing */}
      <div className="w-3/4 mx-auto mt-5">
        <Image
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
        alt="placeholder Image"
        width={350}
        height={350}
        className="m-auto rounded-2xl border-2 border-[#6D696A]"
        />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-10 items-center justify-items-center mt-10">
        <div className="text-center w-3/4">
          <h1 className="text-5xl font-extrabold text-[#D8B4A6]">About Me</h1>
          <div className="text-xl text-center p-5 rounded-2xl mt-10 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1">
            <p>Hi, I'm Diego, a passionate web developer with a focus on creating intuitive and dynamic user experiences. I specialize in front-end development, working with modern tools like React, JavaScript, Tailwind, and CSS to build responsive, user-friendly websites.</p>
            <br />
            <p>What excites me the most is using my skills to solve real-world problems and bring ideas to life through code. When I'm not working on web projects, you can find me playing video games, reading comics, or spending time with people I love.</p>
            <br />
            <p>Want to know more about me? Click Here!</p>
          </div>
        </div>

        <div>
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
          alt="placeholder Image"
          width={450}
          height={450}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        <div>
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1745530659/second_black_suit_spider-man_1990_14_art_by_todd_mcfarlane_and_gregory_wright_zrqgwk.jpg"}
          alt="placeholder Image"
          width={450}
          height={450}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        <div className="text-center w-3/4">
          <h1 className="text-5xl font-extrabold text-[#D8B4A6]">Education</h1>
          <div className="text-xl text-center p-5 rounded-2xl mt-10 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-v1-move shadow-v1">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quis quo perferendis quaerat labore hic omnis cumque amet laboriosam necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae eum architecto saepe totam perspiciatis nostrum asperiores iste quo debitis.</p>
          </div>
        </div>

      </div>
    </>
  );
}
