import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D] flex">
      <div className='px-[4%] py-[2%] basis-[75%]'>
          <p className='font-bold text-[30px] text-white  '>IT BERRIES</p>
          <p className='font-normal text-[15px] text-white mt-7'>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
          <div className='mt-20 px-4 py-2 border-l-2 border-r-2 border-white max-w-[125px]'><p className='font-semibold text-[15px] text-white' >READ MORE</p></div>
      </div>
      <div className='basis-[25%]'>
        <img className='' src='./Logo ITB.png'/>
      </div>
        
       
    </div>
  )
}

export default Footer
