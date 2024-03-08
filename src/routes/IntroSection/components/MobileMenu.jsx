import { useState } from "react";
import MobileMenuButtons from "./MobileMenuButtons";
import FeaturesSubMenuItem from "./FeaturesSubMenuItem";

/* eslint-disable react/prop-types */
function MobileMenu({ menuOpen, setMenuOpen }) {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);

    function handleFeaturesClick() {
        setFeaturesOpen(!featuresOpen);
    }

    function handleCompanyClick() {
        setCompanyOpen(!companyOpen);
    }

    return (
        <div
            className={`flex bg-white z-20 w-[250px] h-full overflow-y-auto py-32 fixed right-0 top-0 transition-all ${
                menuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[250px]"
            }`}
        >
            {/* Close Button */}
            <div
                className="absolute right-0 m-5 "
                onClick={() => setMenuOpen(false)}
            >
                <img
                    src="assets/images/introsection/icon-close-menu.svg"
                    alt="Close button"
                    className="w-6 h-6"
                />
            </div>

            {/* Text Container */}
            <div className="flex flex-col gap-3 mt-20 px-7 w-full">
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
                        featuresOpen ? "flex flex-col gap-4 p-4" : "hidden"
                    }
                >
                    <FeaturesSubMenuItem
                        icon={"assets/images/introsection/icon-todo.svg"}
                        text="Todo List"
                    />

                    <FeaturesSubMenuItem
                        icon={"assets/images/introsection/icon-calendar.svg"}
                        text="Calendar"
                    />

                    <FeaturesSubMenuItem
                        icon={"assets/images/introsection/icon-reminders.svg"}
                        text="Reminders"
                    />

                    <FeaturesSubMenuItem
                        icon={"assets/images/introsection/icon-planning.svg"}
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
                        companyOpen ? "flex flex-col gap-4 p-4" : "hidden"
                    }
                >
                    <p className="font-bold text-gray-500">History</p>
                    <p className="font-bold text-gray-500">Our Team</p>
                    <p className="font-bold text-gray-500">Blog</p>
                </div>

                <MobileMenuButtons text={"Careers"} img="" />

                <MobileMenuButtons text={"About"} img="" />

                {/* Buttons */}
                <div className="flex flex-col gap-3 items-center w-full justify-center mt-10">
                    <button className="text-gray-500">Login</button>

                    <button className="text-gray-500 border-2 border-gray-500 border-solid rounded-xl w-full py-2 mb-10">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
