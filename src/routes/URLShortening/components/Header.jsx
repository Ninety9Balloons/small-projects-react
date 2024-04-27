/* eslint-disable react/prop-types */
export default function Header({ menuOpen, setMenuOpen }) {
    return (
        <div className="flex justify-between items-center w-full mt-5">
            {/* Left */}

            <div className="flex gap-10 items-center">
                {/* Logo */}
                <img src="assets/images/url-shortening/logo.svg" alt="logo" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex font-bold text-gray gap-5">
                    <li className="hover:text-black transition-all cursor-pointer">
                        Features
                    </li>
                    <li className="hover:text-black transition-all cursor-pointer">
                        Pricing
                    </li>
                    <li className="hover:text-black transition-all cursor-pointer">
                        Resources
                    </li>
                </ul>
            </div>

            {/* Hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col justify-center items-center md:hidden"
            >
                <span
                    className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm ${
                            menuOpen
                                ? "rotate-45 translate-y-1"
                                : "-translate-y-0.5"
                        }`}
                ></span>
                <span
                    className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-6 rounded-sm my-0.5 ${
                            menuOpen ? "opacity-0" : "opacity-100"
                        }`}
                ></span>
                <span
                    className={`bg-black block transition-all duration-300 ease-out
          h-0.5 w-6 rounded-sm ${
              menuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
                ></span>
            </button>

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-5">
                <button className="font-bold text-gray">Login</button>
                <button className="bg-cyan rounded-full w-full font-bold text-white px-5 py-2 hover:brightness-110 transition-all">
                    Sign Up
                </button>
            </div>
        </div>
    );
}
