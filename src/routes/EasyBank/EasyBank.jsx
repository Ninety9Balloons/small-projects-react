import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BodyContent from "./components/BodyContent";
import Articles from "./components/Articles";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

export default function EasyBank() {
    const [menu, setMenu] = useState(false);

    return (
        // Main Container
        <div className="flex w-full justify-center relative ">
            {/* Mobile Menu */}
            <MobileMenu menu={menu} />

            {/* Background Container */}
            <div className="flex flex-col max-w-[400px] lg:max-w-[1200px] items-center w-full bg-white relative ">
                {/* Header */}
                <Header menu={menu} setMenu={setMenu} />

                {/* Hero */}
                <Hero />

                {/* Why chose Easy Bank Body Content */}
                <BodyContent />

                {/* Latest Articles */}
                <Articles />

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
