"use client";

import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";

export default function Home() {
  return (
    <>
    
    {/* Navbar */}
    <div className="flex justify-between items-center text-3xl px-4 font-extrabold">
        <h1>• Home</h1>
        <h1 className="text-[#FFC3CB]">Diego Esquivias</h1>
        <HiOutlineMenu className="cursor-pointer hover:text-[#FFC3CB] transition duration-250 ease-in-out" size={50} />
    </div>


    <br />

    <div className="text-center">
      <span>
        Welcome To My Portfolio • Welcome To My Portfolio • Welcome To My Portfolio •
      </span>
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
        src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1740198021/coding_se4slo.webp"}
        alt="placeholder Image"
        width={350}
        height={350}
        className="m-auto rounded-2xl border-2 border-[#6D696A]"
        />
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-10 items-center justify-items-center mt-10">
        <div className="text-center w-3/4">
          <h1 className="text-5xl font-extrabold text-[#FFC3CB]">About Me</h1>
          <div className="text-xl text-center border border-[#6D696A] p-5 rounded-2xl mt-5 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quis quo perferendis quaerat labore hic omnis cumque amet laboriosam necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae eum architecto saepe totam perspiciatis nostrum asperiores iste quo debitis.</p>
          </div>
        </div>

        <div>
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1740198021/coding_se4slo.webp"}
          alt="placeholder Image"
          width={250}
          height={250}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        <div>
          <Image
          src={"https://res.cloudinary.com/dom4vyzw7/image/upload/v1740198021/coding_se4slo.webp"}
          alt="placeholder Image"
          width={250}
          height={250}
          className="m-auto rounded-2xl border-2 border-[#6D696A]"
          />
        </div>

        <div className="text-center w-3/4">
          <h1 className="text-5xl font-extrabold text-[#FFC3CB]">Education</h1>
          <div className="text-xl text-center border border-[#6D696A] p-5 rounded-2xl mt-5 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-3xl">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quis quo perferendis quaerat labore hic omnis cumque amet laboriosam necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae eum architecto saepe totam perspiciatis nostrum asperiores iste quo debitis.</p>
          </div>
        </div>

      </div>
    </>
  );
}
