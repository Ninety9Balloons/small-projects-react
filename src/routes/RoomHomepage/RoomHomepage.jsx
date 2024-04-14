import "./App.css";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Body from "./components/Body";
import { useState } from "react";

export default function RoomHomepage() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className="w-full bg-white flex justify-center relative">
            {/* Mobile Menu */}
            <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

            {/* Container for content */}
            <div
                className={`flex flex-col max-w-[400px] lg:max-w-[1200px] w-full h-full min-h-screen items-center lg:items-start`}
            >
                {/* Header */}
                <Header setMobileMenu={setMobileMenu} />

                {/* Hero Section */}
                <Hero />

                {/* Secondary Section */}
                <Body />
            </div>
        </div>
    );
}
