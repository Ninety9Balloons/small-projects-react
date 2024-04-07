import { useState } from 'react'
import data from '../../data.json'

export default function Destination() {
  const destinations = data.destinations;
  const [value, setValue] = useState(0)
  const { name, images, description, distance, travel } = destinations[value]

  const buttonStyle = "uppercase tracking-widest py-2 cursor-pointer transition-all border-b-2 border-transparent"
  const activeStyle = "uppercase tracking-widest py-2 cursor-pointer transition-all text-white border-b-2 border-white"

  return (
    <div className="flex flex-col lg:flex-row justify-start items-center h-full min-h-screen w-full p-20 text-white">

      {/* Desktop left container */}
      <div className="w-full flex flex-col items-center lg:w-[50%]">
        {/* Page Header */}
        <p className='uppercase tracking-widest lg:text-2xl lg:p-20 lg:self-start'><span className='opacity-25'>01 </span> Pick your destination</p>

        {/* Planet Image */}
        <img src={images.png} alt={`image of ${name}`} className="h-[250px] w-[250px] lg:w-[70%] lg:h-auto my-10 lg:my-0" />
      </div>

      {/* Desktop Right Container */}
      <div className="w-full flex flex-col items-center lg:w-[50%] lg:px-20 lg:flex lg:flex-col lg:justify-end ">
        {/* Select a planet */}
        <div className='flex gap-4 text-[#d0d6f9]'>
          <button onClick={() => setValue(0)} className={value === 0 ? activeStyle : buttonStyle}>Moon</button>
          <button onClick={() => setValue(1)} className={value === 1 ? activeStyle : buttonStyle}>Mars</button>
          <button onClick={() => setValue(2)} className={value === 2 ? activeStyle : buttonStyle}>Europa</button>
          <button onClick={() => setValue(3)} className={value === 3 ? activeStyle : buttonStyle}>Titan</button>
        </div>

        {/* Name */}
        <h1 className="text-8xl uppercase my-4">{name}</h1>

        {/* Descripiton */}
        <p className='text-[#D0D6F9] tracking-wide text-center lg:text-left lg:text-lg'>{description}</p>


        <div className='flex flex-col items-center justify-center border-t-[1px] border-[#d0d6f9] mt-5 p-6 lg:p-0 lg:pt-6 w-full gap-5 lg:gap-16 lg:flex-row lg:justify-start'>
          {/* Distance */}
          <div className='text-center lg:text-left uppercase tracking-wide'>
            <p className='text-[#d0d6f9] uppercase tracking-wide'>Avg. distance</p>
            <p className='text-3xl'>{distance}</p>
          </div>

          {/* Travel */}
          <div className='text-center lg:text-left uppercase tracking-wide'>
            <p className='text-[#d0d6f9] uppercase tracking-wide'>Est. travel time</p>
            <p className='text-3xl'>{travel}</p>
          </div>
        </div>

      </div>

    </div>
  )
}