import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import AdvancedStats from "./components/AdvancedStats";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

export default function URLShortener() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex justify-center w-full bg-white h-full min-h-screen overflow-hidden">
            {/* Content */}
            <div className="flex flex-col items-center w-full p-5 pb-0 max-w-[400px] md:max-w-[1440px] lg:max-w-[1920px] relative">
                {/* Mobile Menu */}
                <MobileMenu menuOpen={menuOpen} />

                {/* Header */}
                <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                {/* Hero */}
                <Hero />

                {/* Shortern it */}
                <Shorten />

                {/* Advanced Stats */}
                <AdvancedStats />

                {/* Boost */}
                <Boost />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
