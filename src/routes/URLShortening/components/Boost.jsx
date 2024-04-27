import GetStartedButton from "./GetStartedButton";

export default function Boost() {
    return (
        <div className="relative flex h-full overflow-hidden w-screen bg-gray/10">
            {/* Background */}
            <div className="absolute flex justify-center w-screen h-full bg-dark-violet z-0">
                <img
                    src="assets/images/url-shortening/bg-boost-mobile.svg"
                    alt="background"
                    className="rounded-xl md:hidden z-0 object-fit"
                />
                <img
                    src="assets/images/url-shortening/bg-boost-desktop.svg"
                    alt="background"
                    className="hidden md:block  rounded-xl z-0 object-fit"
                />
            </div>

            <div className="flex flex-col justify-center items-center z-10 gap-5 py-20 h-full w-full">
                <h2 className="h2 font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center">
                    Boost your links today
                </h2>

                <GetStartedButton />
            </div>
        </div>
    );
}
