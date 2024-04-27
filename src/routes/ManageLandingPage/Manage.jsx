import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatsDifferent from "./components/WhatsDifferent";
import Testimonials from "./components/Testimonials";
import Simplify from "./components/Simplify";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

export default function Manage() {
    const [menu, setMenu] = useState(false);

    return (
        // Background
        <div className="relative flex justify-center w-full overflow-hidden h-full min-h-screen bg-white">
            <img
                src="assets/images/url-shortening/bg-tablet-pattern.svg"
                alt="background"
                className="absolute z-0 md:-right-40 bg-repeat"
            />

            {/* Content */}
            <div className="w-full max-w-[400px] md:max-w-[1920px] flex flex-col items-center z-10 p-5 pb-0 md:px-10 mt-5 md:mt-0">
                {/* Header */}
                <Header menu={menu} setMenu={setMenu} />

                {/* Mobile Menu */}
                <MobileMenu menu={menu} setMenu={setMenu} />

                {/* Hero Content */}
                <Hero />

                {/* What's Different */}
                <WhatsDifferent />

                {/* Testimonials */}
                <Testimonials />

                {/* Simplify */}
                <Simplify />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
