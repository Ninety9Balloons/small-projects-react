import Header from "./components/Header";
import HeroTextContainer from "./components/HeroTextContainer";
import ImageContainer from "./components/ImageContainer";
import FooterContainer from "./components/FooterContainer";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

function IntroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className={`min-h-screen flex justify-center items-start transition-all relative ${
                menuOpen ? "bg-gray-500 overscroll-hidden" : "bg-white"
            }`}
        >
            <div className="p-5 flex flex-col justify-between md:justify-start max-w-[1000px] h-full relative">
                {/* Mobile Menu */}
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                {/* Header */}
                <Header setMenuOpen={setMenuOpen} />

                <div className="md:flex md:flex-row-reverse md:items-center md:justify-center md:mx-auto md:h-[640px] md:max-w-[90%] md:gap-20">
                    {/* Hero Image */}
                    <ImageContainer />

                    {/* Hero Text */}
                    <HeroTextContainer />
                </div>

                {/* Footer Icons Mobile */}
                <div className=" md:hidden">
                    <FooterContainer />
                </div>
            </div>
        </div>
    );
}

export default IntroSection;
