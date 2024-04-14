/* eslint-disable react/prop-types */
export default function MobileMenu({ mobileMenu, setMobileMenu }) {
    return (
        <div
            className={` ${
                mobileMenu
                    ? "bg-[rgba(0,0,0,.6)] absolute top-0 bottom-0 left-0 right-0 z-50 flex justify-center"
                    : ""
            }`}
        >
            <div
                className={`w-full h-[100px] max-w-[400px] bg-white fixed z-30 p-5 justify-between items-center ${
                    mobileMenu ? "flex" : "hidden"
                }`}
            >
                {/* Close button */}
                <img
                    src="assets/images/room-homepage/icon-close.svg"
                    alt="close button"
                    className="cursor-pointer w-5 h-5"
                    onClick={() => setMobileMenu(false)}
                />

                {/* Menu */}
                <ul className="flex gap-7 font-bold">
                    <li className="cursor-pointer">home</li>
                    <li className="cursor-pointer">shop</li>
                    <li className="cursor-pointer">about</li>
                    <li className="cursor-pointer">contact</li>
                </ul>
            </div>
        </div>
    );
}
