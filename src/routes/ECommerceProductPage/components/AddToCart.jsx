/* eslint-disable react/prop-types */
export default function AddToCart({ cartItems, setCartItems, productData, quantity }) {
  function handleClick() {
    const newCartArray = [...cartItems, {
      id: Math.floor(Math.random() * 1000),
      thumbnail: productData.product1.thumbnails[0].src, name: productData.product1.name, price: productData.product1.discountPrice, quantity: quantity
    }]
    setCartItems(newCartArray)
  }

  return (
    <button className="flex justify-center items-center gap-4 bg-[rgb(255,155,26)] text-white w-full py-4 rounded-lg mt-4 md:mt-0 cursor-pointer 
      hover:shadow-[0_10px_30px_-15px_rgba(255,155,26.6)] hover:bg-[rgb(255,180,26)] transition-all" disabled={quantity < 1} onClick={() => handleClick()} >
      <img src="assets/images/ecommerceproduct/icon-cart.svg" className="w-4 h-4" />
      <span className="font-bold">Add to cart</span>
    </button>
  )
}