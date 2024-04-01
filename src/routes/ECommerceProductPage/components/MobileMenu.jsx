/* eslint-disable react/prop-types */
export default function MobileMenu({ setShowMobileMenu }) {
    return (
        <div className="bg-white absolute w-[70%] h-screen z-40 top-0 left-0 p-5">
            {/* Close */}
            <img
                src="assets/images/ecommerceproduct/icon-close.svg"
                className="w-4 h-4 cursor-pointer"
                onClick={() => setShowMobileMenu(false)}
            />

            {/* Items */}
            <ul className="mt-12 font-bold text-lg flex flex-col gap-4">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}
