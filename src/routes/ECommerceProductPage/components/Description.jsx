export default function Description({ productData }) {
  return (
    // Container
    <div className="w-full p-3 md:p-0">
      {/* Subheading */}
      <h2 className="tracking-widest font-bold uppercase text-xs text-[rgb(255,155,26)]">Sneaker Company</h2>

      {/* Product Heading */}
      <h1 className="text-3xl font-bold my-2">{productData.product1.name}</h1>

      {/* Description */}
      <p className="text-sm leading-loose text-[rgb(104,112,125)]">{productData.product1.description}</p>

      {/* Price Container */}
      <div className="flex items-center justify-between md:items-start w-full md:flex-col md:mb-5">

        {/* Left */}

        <div className="flex gap-5 items-center my-3 md:mb-1">
          <p className="font-bold text-3xl">${productData.product1.discountPrice.toFixed(2)}</p>

          <p className="bg-[rgb(255,237,224)] text-[rgb(255,155,26)] px-2 py-1/2 rounded-lg font-bold">50%</p>
        </div>

        <p className="text-[rgb(182,188,200)] line-through ">${productData.product1.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
