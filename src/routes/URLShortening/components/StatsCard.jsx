/* eslint-disable react/prop-types */
export default function StatsCard({ image, title, text, id }) {
    // desktop top margin
    const marginMath = id * 5 * 10 + "px";

    return (
        <div
            className={`flex flex-col items-center md:items-start w-full gap-4 bg-white z-10 rounded-lg relative pt-20 p-8 mt-20 md:mt-[${marginMath}]`}
        >
            {/* Image */}
            <div className="flex items-center justify-center bg-dark-violet p-6 md:p-5 rounded-full absolute -top-10">
                <img src={image} alt="image" className="" />
            </div>

            {/* Title */}
            <h2 className="text-2xl text-dark-violet font-bold text-center">
                {title}
            </h2>

            {/* Text */}
            <p className="text-grayish-violet text-center md:text-left">
                {text}
            </p>
        </div>
    );
}
