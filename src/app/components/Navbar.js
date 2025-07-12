import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="./Group.png"
              alt="Logo"
            />
          </div>
          <div className="hidden sm:flex space-x-4 ">
            <Link href="/About" className="text-white text-[17px] hover:bg-gray-700 px-3 py-2 rounded-md font-bold font-montserrat">
              About me
            </Link>
            <Link href="/Skills" className="text-white text-[17px] hover:bg-gray-700 px-3 py-2 rounded-md font-bold font-montserrat">
              Skills
            </Link>
            <Link href="/Portfolio" className="text-white text-[17px] hover:bg-gray-700 px-3 py-2 rounded-md font-bold">
              Portfolio
            </Link>
            <a href="/Contact" className="bg-white text-[17px] text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-full font-bold">
              CONTACT ME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;