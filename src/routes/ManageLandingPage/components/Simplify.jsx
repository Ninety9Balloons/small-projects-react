import GetStartedButton from "./GetStartedButton";

export default function Simplify() {
    return (
        <div className="relative w-screen flex flex-col items-center overflow-hidden bg-bright-red py-32 md:px-10 md:py-16">
            {/* Background */}
            <img
                src="assets/images/manage/bg-simplify-section-mobile.svg"
                alt="Simplify background"
                className="absolute left-0 object-cover md:hidden"
            />
            <img
                src="assets/images/manage/bg-simplify-section-desktop.svg"
                alt="Simplify background"
                className="absolute hidden md:block h-full  inset-0 overflow-hidden"
            />

            {/* Container */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-[400px] md:max-w-[1920px]">
                {/* Text */}
                <h2 className="text-4xl text-white font-semibold text-center">
                    Simplify how your team works today.
                </h2>

                {/* Get Started Button */}
                <GetStartedButton bgColor="white" text="bright-red" />
            </div>
        </div>
    );
}
