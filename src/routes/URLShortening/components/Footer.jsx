export default function Footer() {
    return (
        <div className="w-full flex justify-center py-16 relative">
            {/* Background   */}
            <div className="bg-very-dark-blue w-screen h-full absolute z-0 top-0"></div>

            {/* Content */}
            <div className="flex w-full flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between text-white ">
                {/* Logo */}
                <div className="lg:w-1/3 z-10">
                    <img
                        src="assets/images/url-shortening/logo-white.svg"
                        alt="logo"
                        className="w-32 h-auto mb-16"
                    />
                </div>

                {/* Lists */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:w-1/3 z-10 gap-10 lg:gap-16">
                    <ul className="flex flex-col items-center lg:items-start">
                        <p className="font-bold mb-5">Features</p>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Link Shortening
                        </li>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Branded Links
                        </li>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Analytics
                        </li>
                    </ul>

                    <ul className="flex flex-col items-center lg:items-start">
                        <p className="font-bold mb-5">Resources</p>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Blog
                        </li>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Developers
                        </li>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Support
                        </li>
                    </ul>

                    <ul className="flex flex-col items-center lg:items-start">
                        <p className="font-bold mb-5">Company</p>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            About
                        </li>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Our Team
                        </li>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Careers
                        </li>
                        <li className="text-gray hover:text-cyan transition-all cursor-pointer">
                            Contact
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <ul className="flex gap-5 mt-10 z-10 lg:w-1/3 lg:justify-end">
                    <li>
                        <img
                            src="assets/images/url-shortening/icon-facebook.svg"
                            alt="Facebook icon"
                            className="w-7 h-7"
                        />
                    </li>
                    <li>
                        <img
                            src="assets/images/url-shortening/icon-twitter.svg"
                            alt="Twitter icon"
                            className="w-7 h-7"
                        />
                    </li>
                    <li>
                        <img
                            src="assets/images/url-shortening/icon-pinterest.svg"
                            alt="Pinterest icon"
                            className="w-7 h-7"
                        />
                    </li>
                    <li>
                        <img
                            src="assets/images/url-shortening/icon-instagram.svg"
                            alt="Instagram icon"
                            className="w-7 h-7"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}
