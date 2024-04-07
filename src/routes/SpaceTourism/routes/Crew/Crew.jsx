import { useState } from "react";
import data from '../../data.json'

export default function Crew() {
  const crew = data.crew;
  const [value, setValue] = useState(0)
  const { name, images, role, bio } = crew[value]

  function handlePrevious() {
    if (value === 0) {
      setValue(3)
    } else {
      setValue(value - 1)
    }

  }

  function handleNext() {
    if (value === 3) {
      setValue(0)
    } else {
      setValue(value + 1)
    }
  }

  return (
    <div className="flex flex-col justify-start text-lg items-center h-full min-h-screen p-10 lg:p-0 pt-20 text-white lg:flex-row lg:flex-row-reverse">
      {/* Mobile Page Header */}
      <p className='uppercase tracking-widest lg:hidden'><span className='opacity-25'>02 </span> Meet your crew</p>

      {/* Desktop Right Container */}
      <div className="flex flex-col items-center lg:w-[50%] lg:self-end">

        {/* Images */}
        <div className="border-b-[1px] lg:border-0 border-[#979797] flex justify-center my-5 lg:my-0 relative 
          w-[300px] lg:w-[100%] h-[350px] lg:h-auto">
          {/* Invisible buttons to change the selected crew member */}
          <div className="absolute bg-transparent h-full left-0 w-[50%]" onClick={handlePrevious}></div>
          <div className="absolute bg-transparent h-full right-0 w-[50%]" onClick={handleNext}></div>

          <img src={images.png} alt={`Image of ${name}`} className="object-contain" />
        </div>

        {/* Mobile Number of images icon */}
        <div className="flex lg:hidden flex-row gap-4">
          {crew.map((item, index) => <div
            key={index}
            onClick={() => setValue(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer + ${index === value ? 'bg-white' : 'bg-[#979797]'}`}></div>)}
        </div>
      </div>

      {/* Desktop Left Container */}
      <div className="lg:w-[50%] lg:flex lg:flex-col lg:justify-between lg:p-36 lg:h-full lg:min-h-screen">

        {/* Desktop Page Header */}
        <p className='uppercase tracking-widest hidden lg:block lg:text-2xl lg:place-self-start'><span className='opacity-25'>02 </span> Meet your crew</p>

        {/* Text */}
        <div className="flex flex-col items-center lg:items-start lg:gap-4 py-5 uppercase">
          {/* Role */}
          <p className="text-[#979797] tracking-wide lg:text-2xl">{role}</p>

          {/* Name */}
          <h1 className="text-3xl lg:text-6xl tracking-wide mb-3">{name}</h1>

          {/* Bio */}
          <p className="text-center lg:text-left lg:text-xl text-[#D0D6F9] capitalize">{bio}</p>
        </div>

        {/* Desktop Number of images icon */}
        <div className="hidden lg:flex flex-row gap-4 ">
          {crew.map((item, index) => <div
            key={index}
            onClick={() => setValue(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer + ${index === value ? 'bg-white' : 'bg-[#979797]'}`}></div>)}
        </div>
      </div>
    </div>


  )
}