/* eslint-disable react/prop-types */
export default function MobileMenu({ menu }) {
    return (
        // Background and fade
        <div
            className={`${
                menu ? "flex" : "hidden"
            }  absolute justify-center bg-[rgba(0,0,0,.5)] w-full h-full inset-0 z-30 p-10`}
        >
            {/* Container */}
            <div className="flex flex-col items-center bg-white w-[400px] h-[300px] rounded-lg shadow mt-10 py-10 ">
                {/* Items */}
                <ul className="flex flex-col items-center justify-between h-full font-semibold">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    );
}
