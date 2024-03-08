import FeaturesSubMenuItem from "./FeaturesSubMenuItem";
import MobileMenuButtons from "./MobileMenuButtons";
import { useState } from "react";

/* eslint-disable react/prop-types */
function Header({ setMenuOpen }) {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);

    function handleFeaturesClick() {
        setFeaturesOpen(!featuresOpen);
    }

    function handleCompanyClick() {
        setCompanyOpen(!companyOpen);
    }

    return (
        <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src="/assets/images/introsection/logo.svg"
                    alt="Snap Logo"
                    className="h-full"
                />
            </div>

            {/* Hamburger */}
            <img
                src="/assets/images/introsection/icon-menu.svg"
                alt="Hamburger Menu"
                className="w-7 h-5 block md:hidden"
                onClick={() => setMenuOpen(true)}
            />

            {/* Desktop menu */}
            <div className="hidden md:flex w-full justify-between items-center ml-10 ">
                {/* Left side */}
                <div className="flex items-center gap-8 ">
                    {/* Features */}
                    <MobileMenuButtons
                        text={"Features"}
                        img={
                            featuresOpen
                                ? "icon-arrow-up.svg"
                                : "icon-arrow-down.svg"
                        }
                        handleClick={() => handleFeaturesClick()}
                    />

                    {/* Sub Features Menu */}
                    <div
                        className={
                            featuresOpen
                                ? "flex flex-col gap-4 p-4 md:p-6 md:absolute top-14 left-20 bg-white md:shadow-lg md:rounded-lg z-20 "
                                : "hidden"
                        }
                    >
                        <FeaturesSubMenuItem
                            icon={"assets/images/introsection/icon-todo.svg"}
                            text="Todo List"
                        />

                        <FeaturesSubMenuItem
                            icon={
                                "assets/images/introsection/icon-calendar.svg"
                            }
                            text="Calendar"
                        />

                        <FeaturesSubMenuItem
                            icon={
                                "assets/images/introsection/icon-reminders.svg"
                            }
                            text="Reminders"
                        />

                        <FeaturesSubMenuItem
                            icon={
                                "assets/images/introsection/icon-planning.svg"
                            }
                            text="Planning"
                        />
                    </div>

                    {/* Company */}
                    <MobileMenuButtons
                        text={"Company"}
                        img={
                            companyOpen
                                ? "icon-arrow-up.svg"
                                : "icon-arrow-down.svg"
                        }
                        handleClick={() => handleCompanyClick()}
                    />

                    {/* Sub Company Menu */}
                    <div
                        className={
                            companyOpen
                                ? "flex flex-col gap-4 p-4 md:p-6 md:absolute top-14 left-64 bg-white md:shadow-lg md:rounded-lg z-20"
                                : "hidden"
                        }
                    >
                        <p className="font-bold text-gray-500 cursor-pointer hover:text-black">
                            History
                        </p>
                        <p className="font-bold text-gray-500 cursor-pointer hover:text-black">
                            Our Team
                        </p>
                        <p className="font-bold text-gray-500 cursor-pointer hover:text-black">
                            Blog
                        </p>
                    </div>

                    <a href="#" className="hover:font-bold hover:text-black">
                        Careers
                    </a>

                    <a href="#" className="hover:font-bold hover:text-black">
                        About
                    </a>
                </div>

                {/* Right side */}
                {/* Buttons */}
                <div className="flex gap-7 items-center justify-center">
                    <button className="text-gray-500 hover:text-black  cursor-pointer">
                        Login
                    </button>

                    <button className="text-gray-500 border-2 border-gray-500 hover:border-black border-solid rounded-xl w-full py-2 px-3 hover:text-black  cursor-pointer">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
