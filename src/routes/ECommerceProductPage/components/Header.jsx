/* eslint-disable react/prop-types */

export default function Header({ setShowMobileMenu, showCartModal, setShowCartModal, cartItems }) {
  function handleMenuClick() {
    setShowMobileMenu(true)
  }

  return (
    // Container
    <div className="flex p-3 md:px-3 md:py-0 w-full items-center justify-between">

      {/* Left Side */}
      <div className="flex items-center gap-4 md:gap-0">

        {/* Hamburger */}
        <img src="assets/images/ecommerceproduct/icon-menu.svg" className="cursor-pointer md:hidden" onClick={() => handleMenuClick()} />
        {/* Logo */}
        <div><img src="assets/images/ecommerceproduct/logo.svg" /></div>

        {/* Desktop Menu */}

        <ul className="hidden md:flex ml-10 text-lg text-[rgb(104,112,125)]">
          <li className="hover:text-black border-b-2 hover:border-[rgb(255,155,26)] border-transparent cursor-pointer p-6 transition-all">Collections</li>
          <li className="hover:text-black border-b-2 hover:border-[rgb(255,155,26)] border-transparent cursor-pointer p-6 transition-all">Men</li>
          <li className="hover:text-black border-b-2 hover:border-[rgb(255,155,26)] border-transparent cursor-pointer p-6 transition-all">Women</li>
          <li className="hover:text-black border-b-2 hover:border-[rgb(255,155,26)] border-transparent cursor-pointer p-6 transition-all">About</li>
          <li className="hover:text-black border-b-2 hover:border-[rgb(255,155,26)] border-transparent cursor-pointer p-6 transition-all">Contact</li>
        </ul>

      </div>
      {/* Right Buttons */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Cart */}
        <div className="relative">
          {cartItems.length > 0 ? <p className="px-1 bg-[rgb(255,155,26)] text-xs text-white font-bold text-center rounded-xl absolute -top-2 -right-2">{cartItems.length}</p> : ""}
          <img className="w-5 h-5 cursor-pointer" src="assets/images/ecommerceproduct/icon-cart.svg" onClick={() => setShowCartModal(!showCartModal)} />
        </div>
        {/* User */}
        <img className="w-8 h-8 md:w-10 md:h-10" src="assets/images/ecommerceproduct/image-avatar.png" />
      </div>


    </div>
  )
}