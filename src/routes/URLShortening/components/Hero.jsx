import GetStartedButton from "./GetStartedButton";

export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row-reverse w-full items-center mt-10 relative">
            {/* Image */}
            <div className="w-[480px] md:w-[50%] overflow-hidden -translate-x-10">
                <img
                    src="assets/images/url-shortening/illustration-working.svg"
                    alt="illustration of someone working at a desk"
                    className="translate-x-24 overflow-hidden"
                />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center md:items-start md:pr-10 w-full md:w-[50%] gap-5">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center md:text-left mt-10">
                    More than just shorter links
                </h1>

                {/* Text */}
                <p className="text-gray md:text-lg lg:text-xl md:text-left text-center lg:w-[70%]">
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>

                {/* Button */}
                <GetStartedButton />
            </div>
        </div>
    );
}
