import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[linear-gradient(to_bottom_left,#D6D6D6,#E2E2E2)] min-h-screen p-8">
      {/* Title */}
      <div className="mt-5 h-[107px] w-[404px] border-8 border-black flex items-center justify-center">
        <p className="text-3xl font-bold">SKILLS</p>
      </div>

      {/* USING NOW Section */}
      <div className="mt-12 w-full max-w-5xl">
        <p className="font-bold text-3xl mb-4">USING NOW:</p>
<div className="grid grid-cols-4 gap-x-14 gap-y-10 mt-6">
  {[
    ['Group 12.svg', 'HTML5'],
    ['Group 13.svg', 'CSS3'],
    ['Vector.svg', 'SASS'],
    ['Group.svg', 'JAVASCRIPT'],
    ['Group 14.svg', 'REACT'],
    ['bootstrap.svg', 'BOOTSTRAP'],
    ['git.svg', 'GIT'],
    ['figma.svg', 'FIGMA']
  ].map(([src, label], i) => (
    <div key={i} className="flex flex-col items-center justify-center">
      <img src={`./${src}`} alt={label} className="w-[120px] " />
      <p className="text-xl text-center mt-3">{label}</p>
    </div>
  ))}
</div>


        {/* LEARNING Section */}
        <p className="font-bold text-3xl mt-16 mb-8 max-w-5xl">LEARNING:</p>
        <div className="flex flex-wrap justify-between  gap-y-10">
          {[
            ['Groupab.png', 'NODEJS'],
            ['Vector (1).svg', 'MySQL'],
            ['Vectorab.png', 'MONGODB'],
            ['Group (1).png', 'TYPESCRIPT']
          ].map(([src, label], i) => (
            <div key={i} className="flex flex-col items-center justify-center w-[120px]">
              <img src={`./${src}`} alt={label} />
              <p className="text-xl text-center mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* OTHER SKILLS Section */}
        <p className="font-bold text-3xl mt-16 mb-8">OTHER SKILLS:</p>
        <div className="flex flex-wrap justify-between gap-y-10">
          {[
            ['image 18.svg', 'ANGIELSKI\nC1/C2'],
            ['image 19.svg', 'HISZPAŃSKI\nB1/B2'],
            ['image 20.svg', 'C++'],
            ['image 17.svg', 'C']
          ].map(([src, label], i) => (
            <div key={i} className="flex flex-col items-center justify-center w-[120px]">
              <img src={`./${src}`} alt={label} />
              <p className="text-xl text-center mt-2 whitespace-pre-line">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;