/* eslint-disable react/prop-types */
export default function MobileMenu({ menuOpen }) {
    return (
        <div
            className={`${
                menuOpen ? "absolute" : "hidden"
            } flex flex-col items-center justify-between gap-5 bg-dark-violet text-white w-[90%] px-5 py-10 z-30 mt-20 rounded-lg`}
        >
            {/* Upper Menu */}
            <ul className="flex flex-col items-center gap-3 font-bold">
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>

            <div className="h-[1px] w-full bg-gray/50"></div>

            {/* Lower Menu */}
            <ul className="flex flex-col items-center gap-3 w-full font-bold">
                <li>Login</li>
                <li className="w-full">
                    <button className="bg-cyan rounded-full w-full font-bold text-white px-5 py-2">
                        Get Started
                    </button>
                </li>
            </ul>
        </div>
    );
}
