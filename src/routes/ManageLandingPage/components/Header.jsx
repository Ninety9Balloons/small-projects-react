/* eslint-disable react/prop-types */
import GetStartedButton from "./GetStartedButton";

export default function Header({ menu, setMenu }) {
    return (
        <div className="flex justify-between items-center w-full z-40">
            {/* logo */}
            <img src="assets/images/manage/logo.svg" alt="logo" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-7 font-semibold">
                <li className="hover:text-dark-grayish-blue cursor-pointer transition-all">
                    Pricing
                </li>
                <li className="hover:text-dark-grayish-blue cursor-pointer transition-all">
                    Product
                </li>
                <li className="hover:text-dark-grayish-blue cursor-pointer transition-all">
                    About Us
                </li>
                <li className="hover:text-dark-grayish-blue cursor-pointer transition-all">
                    Careers
                </li>
                <li className="hover:text-dark-grayish-blue cursor-pointer transition-all">
                    Community
                </li>
            </ul>

            {/* Desktop Get Started */}
            <div className="hidden md:block">
                <GetStartedButton bgColor="bright-red" text="white" />
            </div>

            {/* Hamburger */}
            <img
                src={`assets/images/manage/icon-${
                    menu ? "close" : "hamburger"
                }.svg`}
                alt="hamburger"
                className="w-6 h-6 md:hidden"
                onClick={() => setMenu(!menu)}
            />
        </div>
    );
}
