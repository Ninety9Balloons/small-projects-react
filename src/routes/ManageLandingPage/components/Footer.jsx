export default function Footer() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        // Background
        <div className="flex flex-col items-center bg-very-dark-blue w-screen ">
            {/* Container */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between w-full max-w-[400px] md:max-w-[1920px] text-white p-5 md:px-10 md:py-10">
                {/* Sign up */}
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center md:items-start justify-between w-full md:w-1/3"
                >
                    <input
                        type="email"
                        className="rounded-full text-dark-grayish-blue py-3 px-3 mr-2 flex-1"
                        placeholder="Updates in your inbox..."
                    />
                    <button className="bg-bright-red text-white py-3 px-7 text-sm rounded-full my-10 md:my-0 hover:brightness-125 transition-all cursor-pointer">
                        Go
                    </button>
                </form>

                {/* Menu */}
                <ul className="grid grid-cols-2 gap-4 mb-5 md:mb-0 md:w-1/2">
                    <li className="hover:text-bright-red cursor-pointer transition-all">
                        Home
                    </li>
                    <li className="hover:text-bright-red cursor-pointer transition-all">
                        Pricing
                    </li>
                    <li className="hover:text-bright-red cursor-pointer transition-all">
                        Products
                    </li>
                    <li className="hover:text-bright-red cursor-pointer transition-all">
                        About Us
                    </li>
                    <li className="hover:text-bright-red cursor-pointer transition-all">
                        Careers
                    </li>
                    <li className="hover:text-bright-red cursor-pointer transition-all">
                        Community
                    </li>
                    <li className="hover:text-bright-red cursor-pointer transition-all">
                        Privacy Policy
                    </li>
                </ul>

                {/* Logo and Socials */}
                <div className="w-full flex flex-col md:flex-col-reverse items-center mb-10 md:mb-0 md:items-start md:justify-between md:h-full md:w-1/3">
                    {/* Socials */}
                    <ul className="flex justify-between md:gap-3 w-full md:justify-start p-5 md:p-0">
                        <li>
                            <img
                                src="assets/images/manage/icon-facebook.svg"
                                alt="Facebook icon"
                                className="w-7 h-7 md:w-5 md:h-5"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/manage/icon-youtube.svg"
                                alt="Youtube icon"
                                className="w-7 h-7 md:w-5 md:h-5"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/manage/icon-twitter.svg"
                                alt="Twitter icon"
                                className="w-7 h-7 md:w-5 md:h-5"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/manage/icon-pinterest.svg"
                                alt="Pinterest icon"
                                className="w-7 h-7 md:w-5 md:h-5"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/manage/icon-instagram.svg"
                                alt="Instagram icon"
                                className="w-7 h-7 md:w-5 md:h-5"
                            />
                        </li>
                    </ul>

                    {/* Logo */}
                    <img
                        src="assets/images/manage/logo-white.svg"
                        alt="Logo"
                        className="my-5 md:my-0"
                    />
                </div>

                {/* Copyright */}
                <p className="text-dark-grayish-blue text-sm my-5 absolute bottom-0">
                    Copyright 2020 All Rights Reserved
                </p>
            </div>
        </div>
    );
}
