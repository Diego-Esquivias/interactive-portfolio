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



    <div className="text-center animate-marquee">
      <span>
        Welcome To My Portfolio • Welcome To My Portfolio • Welcome To My Portfolio •
      </span>
    </div>
      
    </>
  );
}
