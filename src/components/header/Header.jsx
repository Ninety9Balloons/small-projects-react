import { Link } from "react-router-dom";
import { Toggle } from "../darkModeToggle/DarkModeToggle";

function Header() {
    return (
        <div className="flex fixed top-0 left-0 right-0 bg-primary items-center shadow-md px-2 md:px-10 py-10 text-primary z-50 h-[100px]">
            <Link to={`/`} className="flex flex-1 justify-start">
                <h1 className="font-bold text-sm md:text-xl uppercase tracking-widest hover:text-link transition-all">
                    Small Projects
                </h1>
            </Link>
            <p className="font-bold text-md md:text-2xl text-center uppercase tracking-widest flex-1 flex justify-center">
                React Edition
            </p>
            <div className="flex-1 flex justify-end">
                <Toggle />
            </div>
        </div>
    );
}

export default Header;
