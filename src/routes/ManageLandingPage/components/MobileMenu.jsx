/* eslint-disable react/prop-types */
export default function MobileMenu({ menu }) {
    return (
        // Background
        <div
            className={`${
                menu ? "block" : "hidden"
            } absolute inset-0 bg-gradient-to-t from-black to-transparent z-30`}
        >
            {/* Menu Container */}
            <div className="flex justify-center mt-24">
                <ul className="flex flex-col items-center font-bold gap-5 py-10 bg-white rounded w-full max-w-[350px]">
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Community</li>
                </ul>
            </div>
        </div>
    );
}
