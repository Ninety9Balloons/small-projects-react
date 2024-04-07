import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Destination from "./routes/Destination/Destination";
import Crew from "./routes/Crew/Crew";
import Technology from "./routes/Technology/Technology";
import "./App.css";

export default function SpaceTourism() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [page, setPage] = useState("home");

    let background = `bg-[url('/assets/images/spacetourism/${page}/background-${page}-mobile.jpg')] md:bg-[url('/assets/images/spacetourism/${page}/background-${page}-desktop.jpg')]`;

    return (
        // {/* Background wrapper */ }
        <div
            className={`bg-no-repeat bg-cover w-full md:flex md:flex-col md:items-center ${background}`}
        >
            <div className="h-full w-full md:max-w-[1500px] min-h-screen">
                {menuOpen ? <MobileMenu setMenuOpen={setMenuOpen} /> : ""}
                <Header
                    setMenuOpen={setMenuOpen}
                    page={page}
                    setPage={setPage}
                />
                <Routes>
                    <Route path="/home" element={<Home setPage={setPage} />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </div>
        </div>
    );
}
