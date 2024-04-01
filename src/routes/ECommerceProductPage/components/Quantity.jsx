/* eslint-disable react/prop-types */
export default function Quantity({ quantity, setQuantity }) {
  return (
    <div className="w-full md:w-[50%] lg:w-[40%] flex justify-between bg-[rgb(248,248,253)]  rounded-lg">
      {/* Minus */}
      <button className="flex items-center justify-center rounded-l-xl p-4 hover:bg-[rgb(255,180,26)] transition-all" onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : "" }} > <img src="assets/images/ecommerceproduct/icon-minus.svg" /></button>


      {/* Amount */}
      <span className="font-bold p-4">{quantity}</span>

      {/* Plus */}
      <button className="flex items-center justify-center rounded-r-xl cursor-pointer p-4 hover:bg-[rgb(255,180,26)] transition-all" onClick={() => setQuantity(quantity + 1)}>
        <img src="assets/images/ecommerceproduct/icon-plus.svg" /></button>
    </div>
  )
}