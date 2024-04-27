/* eslint-disable react/prop-types */
export default function DifferentItem({ number, title, text }) {
    return (
        <div className="flex flex-col w-full gap-5">
            {/* Title Bar */}
            <div className="flex w-full items-center bg-very-pale-red md:bg-transparent rounded-l-full">
                <p className="bg-bright-red text-white font-semibold px-5 rounded-full py-1">
                    {number}
                </p>
                <p className="font-bold px-2 py-1 ml-3">{title}</p>
            </div>

            {/* Text */}
            <p className="text-dark-grayish-blue md:ml-20">{text}</p>
        </div>
    );
}
