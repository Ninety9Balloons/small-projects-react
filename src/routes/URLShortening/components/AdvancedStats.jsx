import StatsCard from "./StatsCard";
import data from "../data.json";

const statsData = data.data;

export default function AdvancedStats() {
    return (
        <div className="relative flex flex-col items-center w-full h-full py-20">
            {/* Background */}
            <div className="absolute w-screen mx-auto h-full bg-gray/10 z-0 bottom-0"></div>
            <div className="bg-cyan w-2 md:w-1/2 h-[800px] md:h-2 absolute top-[400px] md:top-[370px]"></div>

            {/* Heading */}
            <div className="flex flex-col items-center gap-6 z-10">
                {/* Heading */}
                <h2 className="text-4xl text-dark-violet font-bold text-center">
                    Advanced Statistics
                </h2>

                <p className="text-grayish-violet text-center md:w-[65%]">
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.
                </p>
                {/* Text */}
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row md:max-w-[1000px] gap-10 h-full">
                {statsData.map((item) => (
                    <StatsCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}
