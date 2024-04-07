/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function MobileMenu({ setMenuOpen }) {
    return (
        <div className="absolute z-30 flex justify-end w-full h-full min-h-screen text-white">
            <div className="w-[70%] backdrop-blur-lg p-5">
                <div className="w-full flex justify-end">
                    <img
                        src="/assets/images/spacetourism/shared/icon-close.svg"
                        alt="Close menu"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    />
                </div>

                <ul className="w-full uppercase text-xl tracking-widest flex flex-col gap-4 mt-20">
                    <li>
                        <Link
                            to="/spacetourism/home"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="mr-2 font-bold">00</span> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/spacetourism/destination"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="mr-2 font-bold">01</span>{" "}
                            Destination
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/spacetourism/crew"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="mr-2 font-bold">02</span> crew
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/spacetourism/technology"
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="mr-2 font-bold">03</span> Techology
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
