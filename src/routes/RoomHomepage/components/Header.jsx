/* eslint-disable react/prop-types */
export default function Header({ setMobileMenu }) {
    return (
        <header
            className="absolute top-0 z-20 max-w-[400px] flex
      bg-gradient-to-t from-transparent to-[rgba(0,0,0,.3)] lg:to-transparent w-full px-5 pt-10 pb-3"
        >
            <img
                src="assets/images/room-homepage/icon-hamburger.svg"
                alt="hamburger menu"
                className={`cursor-pointer lg:hidden`}
                onClick={() => setMobileMenu(true)}
            />
            <div className="flex justify-center lg:justify-start w-full items-center">
                <img
                    src="assets/images/room-homepage/logo.svg"
                    alt="logo"
                    className="w-20 object-contain"
                />

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-7 font-semibold text-white ml-20">
                    <li className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white transition-all">
                        home
                    </li>
                    <li className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white transition-all">
                        shop
                    </li>
                    <li className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white transition-all">
                        about
                    </li>
                    <li className="cursor-pointer py-2 border-b-2 border-transparent hover:border-white transition-all">
                        contact
                    </li>
                </ul>
            </div>
        </header>
    );
}
