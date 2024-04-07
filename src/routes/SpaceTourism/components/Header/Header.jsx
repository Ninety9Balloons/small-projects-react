/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Header({ setMenuOpen, setPage, page }) {
    return (
        <header className="flex justify-between items-center p-3 md:p-0 md:m-5 bg-transparent absolute w-full md:max-w-[1500px]">
            {/* Logo */}
            <Link onClick={() => setPage("home")} to="/spacetourism/home">
                <img
                    src="/assets/images/spacetourism/shared/logo.svg"
                    alt="Space tourism logo"
                    className="w-10 h-10 md:mx-10"
                />
            </Link>

            {/* Hamburger */}
            <img
                src="/assets/images/spacetourism/shared/icon-hamburger.svg"
                alt="Hamburger menu"
                className="w-6 h-6 md:hidden"
                onClick={() => setMenuOpen(true)}
            />

            {/* Desktop horizontal line */}
            <div className="hidden md:block h-[1px] bg-white opacity-50 ml-10 absolute left-20 w-[45%] z-30"></div>

            {/* Desktop Menu */}
            <ul className="text-white hidden md:flex justify-around gap-10 backdrop-blur-lg bg-[rgba(255,255,255,.1)] px-20 w-[50%] uppercase">
                <li
                    onClick={() => setPage("home")}
                    className={`py-7 cursor-pointer transition-all text-white border-b-2 + ${
                        page === "home" ? "border-white" : "border-transparent"
                    }`}
                >
                    <Link to="/spacetourism/home">
                        <span className="font-bold mr-2">00</span>Home
                    </Link>
                </li>
                <li
                    onClick={() => setPage("destination")}
                    className={`py-7 cursor-pointer transition-all text-white border-b-2 + ${
                        page === "destination"
                            ? "border-white"
                            : "border-transparent"
                    }`}
                >
                    <Link to="/spacetourism/destination">
                        <span className="font-bold mr-2">01</span>Destination
                    </Link>
                </li>
                <li
                    onClick={() => setPage("crew")}
                    className={`py-7 cursor-pointer transition-all text-white border-b-2 + ${
                        page === "crew" ? "border-white" : "border-transparent"
                    }`}
                >
                    <Link to="/spacetourism/crew">
                        <span className="font-bold mr-2">02</span>Crew
                    </Link>
                </li>
                <li
                    onClick={() => setPage("technology")}
                    className={`py-7 cursor-pointer transition-all text-white border-b-2 + ${
                        page === "technology"
                            ? "border-white"
                            : "border-transparent"
                    }`}
                >
                    <Link to="/spacetourism/technology">
                        <span className="font-bold mr-2">03</span>Technology
                    </Link>
                </li>
            </ul>
        </header>
    );
}
