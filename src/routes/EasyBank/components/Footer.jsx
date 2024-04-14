export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row items-center  lg:justify-between bg-dark-blue text-white w-full p-10 gap-8">
            {/* Left Half */}
            <div className="flex flex-col lg:flex-row gap-8 justify-between lg:h-[100px] lg:w-[50%]">
                {/* Far Left Third */}
                <div className="flex flex-col gap-8 justify-between">
                    {/* Logo */}
                    <img
                        src="assets/images/easybank/logo-footer.svg"
                        alt="logo"
                        className="logo"
                    />

                    {/* Social Media */}
                    <ul className="flex gap-5 items-center">
                        <li>
                            <img
                                src="assets/images/easybank/icon-facebook.svg"
                                alt="Facebook icon"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/easybank/icon-youtube.svg"
                                alt="Youtube icon"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/easybank/icon-twitter.svg"
                                alt="Twitter icon"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/easybank/icon-pinterest.svg"
                                alt="Pinterest icon"
                            />
                        </li>
                        <li>
                            <img
                                src="assets/images/easybank/icon-instagram.svg"
                                alt="Instrgram icon"
                            />
                        </li>
                    </ul>
                </div>
                {/* Links */}
                <ul className="flex flex-col lg:flex-wrap items-center lg:items-start lg:justify-between gap-2 lg:w-[50%]">
                    <li className="hover:text-lime-green transition-all cursor-pointer">
                        About Us
                    </li>
                    <li className="hover:text-lime-green transition-all cursor-pointer">
                        Contact
                    </li>
                    <li className="hover:text-lime-green transition-all cursor-pointer">
                        Blog
                    </li>
                    <li className="hover:text-lime-green transition-all cursor-pointer">
                        Careers
                    </li>
                    <li className="hover:text-lime-green transition-all cursor-pointer">
                        Support
                    </li>
                    <li className="hover:text-lime-green transition-all cursor-pointer">
                        Privacy Policy
                    </li>
                </ul>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5 items-center lg:items-end">
                {/* Call to Action */}
                <button className="bg-gradient-to-r from-lime-green to-bright-cyan rounded-full font-semibold px-6 py-2 text-white hover:brightness-110 transition-all">
                    Request Invite
                </button>

                {/* Copyright */}
                <p className="text-grayish-blue">
                    © Easybank. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
