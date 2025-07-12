import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex h-screen bg-[#D7D7D7]">
      
      {/* Left Section */}
      <div className="w-1/4  flex flex-col justify-center items-start px-16 ml-24">
      
        
        <h3 className="text-xl font-normal text-black mb-2">Hi, I am</h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-2">Vivek Madiyan</h1>
        <p className="text-gray-500 text-lg mb-8">Front-end Developer </p>

        <div className="flex space-x-6 ">
          <a href="#" className='shadow-sm p-2 bg-[#C4C4C4]'><Image src="./Vector.png" alt="Email" width={24} height={24} /></a>
          <a href="https://www.linkedin.com/in/vivekmadiyan" className='shadow-sm p-2 bg-[#C4C4C4]'><Image src="./paste.png" alt="GitHub" width={24} height={24} /></a>
          <a href="https://github.com/vivekmadiyan" className='shadow-sm p-2 bg-[#C4C4C4]'><Image src="./link.png" alt="LinkedIn" width={24} height={24} /></a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-3/4 bg-[url('/Rectangle.png')]  flex items-center justify-center relative bg-cover">
      
      </div>

    </div>
  );
};

export default HeroSection;
