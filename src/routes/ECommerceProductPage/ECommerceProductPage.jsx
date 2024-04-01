import "./App.css";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Header from "./components/Header";
import CartModal from "./components/CartModal";
import Images from "./components/Images";
import Description from "./components/Description";
import Quantity from "./components/Quantity";
import AddToCart from "./components/AddToCart";
import data from "./data.json";

export default function ECommerceProductPage() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const productData = data;

    return (
        // Container
        <div className="flex justify-center bg-white w-full">
            {/* When the mobile menu is showing, put slightly transparent background over the site */}
            {showMobileMenu ? (
                <div className="bg-black z-30 opacity-75 absolute top-0 left-[50%] right-0 bottom-0"></div>
            ) : (
                ""
            )}

            <div className="min-w-[350px] max-w-[400px] md:max-w-[1000px] h-screen flex flex-col relative">
                {/* Moblile Menu */}
                {showMobileMenu ? (
                    <MobileMenu
                        setShowMobileMenu={setShowMobileMenu}
                        showCartModal={showCartModal}
                        setShowCartModal={setShowCartModal}
                    />
                ) : (
                    ""
                )}

                {/* Header */}
                <Header
                    setShowMobileMenu={setShowMobileMenu}
                    showMobileMenu={showMobileMenu}
                    showCartModal={showCartModal}
                    setShowCartModal={setShowCartModal}
                    cartItems={cartItems}
                />

                {/* Desktop Divder Line */}
                <div className="hidden md:block mb-10">
                    <hr />
                </div>

                {/* Cart Modal */}
                {showCartModal ? (
                    <CartModal
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                ) : (
                    ""
                )}

                {/* Mobile/Desktop View for hero */}
                <div className="flex flex-col md:flex-row md:items-center">
                    {/* Images */}
                    <div className="w-full md:w-[50%] md:p-6">
                        <Images productData={productData} />
                    </div>

                    {/* Mobile/Desktop view for info */}
                    <div className="flex flex-col md:w-[50%] md:p-6">
                        {/* Description */}
                        <Description productData={productData} />

                        {/* Mobile/Desktop view */}
                        <div className="flex flex-col md:flex-row md:gap-3">
                            {/* Quantity */}
                            <Quantity
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />

                            {/* Add to cart */}
                            <AddToCart
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                productData={productData}
                                quantity={quantity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
