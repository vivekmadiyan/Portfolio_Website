import React from 'react';

const Page = () => {
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="relative w-full max-w-[1920px] h-[321px]">
        {/* Background Image */}
        <img
          src="./port.png"
          alt="Portfolio Banner"
          className="w-full h-full object-cover"
        />

        {/* Centered Overlay Text */}
        <div className="absolute top-4 left-1/2 translate-x-[-50%] translate-y-[-50%] font-montserrat font-bold text-[30px] leading-[128%] w-[367px] tracking-[0.3554em] border-[4px] border-black p-4 bg-transparent text-black text-center mt-10">
          PORTFOLIO
        </div>
<div className="flex justify-center  bg-black top-0 h-[80px]">
  <ul className="flex gap-6 text-white font-semibold  border-white pb-2">
<li className="cursor-pointer">
  <span className="inline-block border-b-[2px] border-white leading-none">All</span>
</li>

    <li className="cursor-pointer">Coded</li>
    <li className="cursor-pointer">Designed</li>
  </ul>
</div>
<div className="grid grid-cols-3 gap-0 p-0 m-0">
  <img src="./img1.jpg" alt="Image 1" className="w-full h-auto" />
  <img src="./img2.jpg" alt="Image 2" className="w-full h-[337.95]" />
  <img src="./img3.jpg" alt="Image 3" className="w-full h-auto" />

  <img src="./img4.jpg" alt="Image 4" className="w-full  h-[337.95]" />
  <img src="./img5.jpg" alt="Image 5" className="w-full h-auto" />
  <img src="./img6.jpg" alt="Image 6" className="w-full h-auto" />
</div>
<div className='text-center bg-black text-white'>
    And many more to come!
</div>
      </div>
    </div>
  );
};

export default Page;
