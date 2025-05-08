'use client';

import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import Link from "next/link";

export default function Navbar() {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

return (
    <>
    <div className="sticky top-0 flex justify-between items-center text-4xl px-4 font-extrabold py-4 bg-black z-1 border-b-2 border-b-gray-800">
        <h1>• Home</h1>
        <div>
            <h1 className="text-[#D8B4A6]">Diego Esquivias</h1>
        </div>
        <HiOutlineMenu 
        className="cursor-pointer hover:text-[#D8B4A6]" 
        size={50} 
        onClick={() => setIsSidebarOpen(true)} 
        />
    </div>

    {/* Sidebar Overlay */}
    <div 
        className={`fixed inset-0 bg-black bg-opacity-10 z-40 transition-opacity ${
        isSidebarOpen ? 'opacity-60 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsSidebarOpen(false)}
    ></div>

    {/* Sidebar */}
    <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white border border-[#6D696A] z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-xl font-bold">Menu</h2>
        <IoClose 
            size={30} 
            className="cursor-pointer hover:text-[#D8B4A6]" 
            onClick={() => setIsSidebarOpen(false)} 
        />
        </div>
        <ul className="grid grid-cols-1 grid-rows-4 h-full place-items-center pb-20 text-3xl font-semibold text-center">
        <Link href={"/"}>
            <li className="hover:text-[#D8B4A6] cursor-pointer">Home</li>
        </Link>
        <Link href={"/about"}>
            <li className="hover:text-[#D8B4A6] cursor-pointer">About Me</li>
        </Link>
        <Link href={"/work"}>
            <li className="hover:text-[#D8B4A6] cursor-pointer">Projects</li>
        </Link>
        <Link href={"/contact"}>
            <li className="hover:text-[#D8B4A6] cursor-pointer">Contact</li>
        </Link>
        </ul>
    </div>
    </>
);
}
