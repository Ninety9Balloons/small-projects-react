export default function Hero() {
    return (
        <div className="mt-5 flex flex-col lg:flex-row-reverse items-center pb-20 lg:pb-5 bg-very-light-gray">
            {/* Images */}
            <div className="relative w-full overflow-hidden">
                <img
                    src="assets/images/easybank/image-mockups.png"
                    alt="mockups"
                    className="absolute -top-28 left-0 lg:left-48 z-20"
                />
                <img
                    src="assets/images/easybank/bg-intro-mobile.svg"
                    alt="background"
                    className="w-full lg:hidden"
                />
                <img
                    src="assets/images/easybank/bg-intro-desktop.svg"
                    alt="background"
                    className="w-full hidden lg:block"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center lg:items-start p-5 lg:py-10 lg:gap-4">
                {/* Heading */}
                <h1 className="text-4xl font-semibold text-center lg:text-left">
                    Next generation digital banking
                </h1>

                {/* Text */}
                <p className="py-6 text-grayish-blue text-center lg:text-left">
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>

                {/* Call to action */}
                <button className="bg-gradient-to-r from-lime-green to-bright-cyan rounded-full font-semibold px-6 py-2 text-white hover:brightness-110 transition-all">
                    Request Invite
                </button>
            </div>
        </div>
    );
}
