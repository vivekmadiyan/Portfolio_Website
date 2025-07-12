import React from 'react'

const aboutpage = () => {
  return (
    <div className='flex justify-center items-center bg-[linear-gradient(to_bottom_left,_#D6D6D6,_#E2E2E2)] p-8 '>
      <div className='flex flex-col justify-center items-center gap-20'>
        <div className=' mt-[20px] h-[107px] w-[404px] border-[8px] border-solid border-black flex justify-center items-center'>
          <p className="text-[30px] font-bold">ABOUT ME</p>
        </div>
        <div className=''>
          <p className='text-center max-w-[763px] text-[15px]font-normal'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
        </div>
        <div className=''>
          <h1 className='border-l-[3px] border-r-[3px] border-black px-[30px] py-[2px]'>EXPLORE</h1>
        </div>
        <div className=''>
          <img className='mt-7' src='./qwerrt.png'/>
        </div>
        <div className='flex gap-15'>
          <div className=''>
            <div className='flex items-center '>
              <img className=' w-[61px] h-[64px' src='./136378-2001.png' />
                <p className='relative -left-[25px] font-bold text-[22px] text-center'>DESIGN</p>
            </div>
            <div className='max-w-[461px]'>
              <p className='text-sm ml-[30px]'>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            </div>
            <div className=''>
            <div className='flex items-center '>
              <img className=' w-[61px] h-[64px' src='./maintenance--v3 1.png' />
                <p className='relative -left-[25px] font-bold text-[22px] text-center'>DEVELOPMENT</p>
            </div>
            <div className='max-w-[461px]'>
              <p className='text-sm ml-[30px]'>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            </div>
        </div>
        <div className=''>
        <div className=''>
            <div className='flex items-center '>
              <img className=' w-[61px] h-[64px' src='./img_533288 1.png' />
                <p className='relative -left-[25px] font-bold text-[22px] text-center'>MAINTENANCE</p>
            </div>
            <div className='max-w-[461px]'>
              <p className='text-sm ml-[30px]'>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
            </div>
            </div>
        </div>
        <div className=''>
          <img className='mt-7' src='./qwerrt.png'/>
        </div>

      </div>
    </div>
  )
}

export default aboutpage
