/* eslint-disable react/prop-types */
import { useState } from "react"

export default function Images({ productData }) {
  const imagesArray = productData.product1.images
  const thumbnailsArray = productData.product1.thumbnails

  const [currentImage, setCurrentImage] = useState(imagesArray[0])
  const [activeTN, setActiveTN] = useState(thumbnailsArray[0].id)

       function handleNext(e) {
              
    const nextImage = (imagesArray.indexOf(currentImage) + 1)
    if (nextImage >= imagesArray.length) {
      setCurrentImage(imagesArray[0])
      setActiveTN(thumbnailsArray[0].id)
    } else {
      setCurrentImage(imagesArray[nextImage])
      setActiveTN(thumbnailsArray[nextImage].id)
    }
  }

  function handlePrevious(e) {
      const previousImage = imagesArray.indexOf(currentImage) - 1
    if (previousImage < 0) {
      setCurrentImage(imagesArray[imagesArray.length - 1])
       setActiveTN(thumbnailsArray[imagesArray.length - 1].id)
    } else {
      setCurrentImage(imagesArray[previousImage])
      setActiveTN(thumbnailsArray[previousImage].id)
    }
  }

  function handleTNClick(e) {
    setActiveTN(e.target.id)
       
    for(let i=0; i<imagesArray.length; i++) {
      if (imagesArray[i].id === parseInt(e.target.id)) {
        setCurrentImage(imagesArray[i])
      }
    }
  }

  return (
    // Container
    <div className="w-full">
      {/* Image */}
      <div className="flex relative w-full   h-full">
        <img className="w-full absolute md:relative h-[300px] md:h-[350px] rounded-xl object-cover" src={(currentImage).src} />

        {/* Buttons */}
        <div className="flex w-full h-[300px] justify-between items-center px-3 z-20 md:hidden">
          {/* Left */}
          <img src="assets/images/ecommerceproduct/icon-previous.svg" className="bg-white rounded-full p-2 w-7 h-7 object-cover" onClick={(e) => handlePrevious(e)} />

          {/* Right */}
          <img src="assets/images/ecommerceproduct/icon-next.svg" className="bg-white rounded-full p-2 w-7 h-7 object-cover" onClick={(e) => handleNext(e)} />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:flex mt-5 justify-between">
        {thumbnailsArray.map((item) => (<img key={item.id} id={item.id} src={item.src} onClick={(e) => handleTNClick(e)}
        className={activeTN == item.id ? "w-[100px] h-[100px] border-4 border-[rgb(255,155,26)] rounded-xl cursor-pointer opacity-50 hover:opacity-75 transition-all" 
        : "w-[100px] h-[100px] rounded-xl border-4 border-transparent cursor-pointer hover:opacity-75 transition-all"} />))}
      </div>
    </div>
  )
}