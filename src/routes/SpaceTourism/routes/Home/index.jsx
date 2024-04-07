/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Home({ setPage }) {
    return (
        <div className="flex flex-col lg:flex-row justify-around lg:justify-between items-center h-full min-h-screen w-full p-20 pt-20 text-white ">
            {/* Text Container */}
            <div className="flex flex-col items-center justify-between lg:items-start gap-10 lg:w-[40%] lg:p-20">
                {/* Above Header Text */}
                <p className="uppercase tracking-widest text-[#d0d6f9] lg:text-xl">
                    So, you want to travel to
                </p>

                {/* Header */}
                <h1 className="text-7xl lg:text-[150px] uppercase tracking-widest">
                    Space
                </h1>

                {/* Test */}
                <p className="text-lg lg:text-xl text-center lg:text-left text-[#d0d6f9]">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            {/* Blank Planet */}
            <div className="relative flex justify-center items-center lg:w-[40%]">
                <Link
                    to="/spacetourism/destination"
                    onClick={() => setPage("/destination")}
                    className="w-52 h-52 bg-white hover:bg-black text-black hover:text-white uppercase text-3xl flex items-center justify-center rounded-full transition-all"
                >
                    Explore
                </Link>
            </div>
        </div>
    );
}
