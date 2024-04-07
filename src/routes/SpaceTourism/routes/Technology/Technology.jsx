import data from '../../data.json'
import { useState } from 'react';

export default function Technology() {
  const technology = data.technology;
  const [value, setValue] = useState(0)
  const { name, images, description } = technology[value]

  return (
    <div className="flex flex-col justify-start text-lg items-center h-full w-full min-h-screen p-10 lg:p-0 pt-20 text-white">
      {/* Page Header */}
      <p className='uppercase tracking-widest lg:text-2xl lg:self-start lg:p-24'><span className='opacity-25'>03 </span> Space Launch 101</p>

      {/* Desktop Hero Container */}
      <div className="flex flex-col items-center lg:flex-row-reverse">

        {/* Desktop Right Container */}
        <div className="lg:w-[40%]">

          {/* Images */}
          <div className='flex w-full h-[200px] lg:h-auto lg:justify-end my-5'>
            <img src={images.portrait} alt={`Image of ${name}`} className="object-cover lg:rounded" />
          </div>
        </div>

        {/* Desktop Left Container */}
        <div className="lg:w-[60%] flex flex-col lg:flex-row items-center lg:p-20">

          {/* Item Buttons */}
          <div className="flex gap-5 lg:flex-col lg:mr-16">
            {technology.map((item, index) =>
              <div key={index} onClick={() => setValue(index)}
                className={`border-[1px] border-white rounded-full w-10 h-10 lg:w-16 lg:h-16 lg:text-2xl flex justify-center items-center cursor-pointer transition-all
            ${index === value ? 'bg-white text-black' : 'bg-transparent text-white'}`}>{index + 1}</div>)}
          </div>

          {/* Text */}
          <div className="flex flex-col items-center lg:items-start py-5 uppercase">
            {/* SubHeader */}
            <p className="text-[#979797] tracking-wide">The Terminology...</p>

            {/* Name */}
            <h1 className="text-3xl tracking-wide mb-3 lg:text-6xl">{name}</h1>

            {/* Bio */}
            <p className="text-center lg:text-left lg:text-xl text-[#D0D6F9] capitalize">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}