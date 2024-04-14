/* eslint-disable react/prop-types */
export default function Header({ menu, setMenu }) {
    return (
        <div className="flex absolute z-[40] bg-white p-5 lg:py-0 top-0 justify-between items-center w-full">
            {/* Logo */}
            <img src="assets/images/easybank/logo.svg" alt="logo" />

            {/* Hamburger */}
            <img
                src={`${
                    menu
                        ? "assets/images/easybank/icon-close.svg"
                        : "assets/images/easybank/icon-hamburger.svg"
                }`}
                alt="hamburger"
                className="h-[15px] w-[auto] lg:hidden"
                onClick={() => setMenu(!menu)}
            />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-5 text-grayish-blue">
                <li className="border-b-2 border-transparent hover:text-black hover:border-lime-green transition-all py-6 cursor-pointer">
                    Home
                </li>
                <li className="border-b-2 border-transparent hover:text-black hover:border-lime-green transition-all py-6 cursor-pointer">
                    About
                </li>
                <li className="border-b-2 border-transparent hover:text-black hover:border-lime-green transition-all py-6 cursor-pointer">
                    Contact
                </li>
                <li className="border-b-2 border-transparent hover:text-black hover:border-lime-green transition-all py-6 cursor-pointer">
                    Blog
                </li>
                <li className="border-b-2 border-transparent hover:text-black hover:border-lime-green transition-all py-6 cursor-pointer">
                    Careers
                </li>
            </ul>

            {/* Call to action */}
            <button
                className="hidden lg:block bg-gradient-to-r from-lime-green to-bright-cyan rounded-full 
        font-semibold px-6 py-2 text-white hover:brightness-110 transition-all"
            >
                Request Invite
            </button>
        </div>
    );
}
