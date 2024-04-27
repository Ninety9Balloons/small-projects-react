import GetStartedButton from "./GetStartedButton";

export default function Hero() {
    return (
        <div className="py-10 flex flex-col md:flex-row-reverse items-center w-full">
            {/* Image */}
            <img
                src="assets/images/manage/illustration-intro.svg"
                alt="Image of charts and graphs"
                className="md:w-[50%]"
            />

            {/* Text */}
            <div className="flex flex-col items-center md:items-start md:w-[50%]">
                {/* Heading */}
                <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-left py-3 md:w-[80%]">
                    Bring everyone together to build better products.
                </h1>

                {/* Text Content */}
                <p className="text-dark-grayish-blue text-center lg:text-lg md:text-left md:w-[50%] md:py-5">
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>

                {/* Button */}
                <GetStartedButton bgColor="bright-red" text="white" />
            </div>
        </div>
    );
}
