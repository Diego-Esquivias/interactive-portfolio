import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white border-t border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="flex justify-center space-x-6 my-4 text-lg">
            <FaGithub 
            size={30} 
            className="cursor-pointer hover:text-[#FFC3CB] transform transition-transform duration-300 ease-in-out hover:scale-120" 
            />
            <FaXTwitter 
            size={30} 
            className="cursor-pointer hover:text-[#FFC3CB] transform transition-transform duration-300 ease-in-out hover:scale-120" 
            />
            <FaYoutube
            size={30} 
            className="cursor-pointer hover:text-[#FFC3CB] transform transition-transform duration-300 ease-in-out hover:scale-120" 
            />
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer