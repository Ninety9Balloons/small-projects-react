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
            className={`p-5 min-h-screen flex flex-col justify-between transition-all relative ${
                menuOpen ? "bg-gray-500 overscroll-hidden" : "bg-white"
            }`}
        >
            {/* Mobile Menu */}
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* Header */}
            <Header setMenuOpen={setMenuOpen} />

            {/* Hero Image */}
            <ImageContainer />

            {/* Hero Text */}
            <HeroTextContainer />

            {/* Footer Icons */}
            <FooterContainer />
        </div>
    );
}

export default IntroSection;
