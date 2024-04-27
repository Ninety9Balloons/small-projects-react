/* eslint-disable react/prop-types */
export default function TestimonialItem({ image, name, text }) {
    return (
        <div className="flex flex-col items-center relative lg:w-[500px]">
            {/* Avatar */}
            <img
                src={image}
                alt={`avatar image of ${name}`}
                className="absolute top-0 w-20 h-20"
            />

            <div className="bg-very-light-gray py-16 pb-10 mt-[44px] flex flex-col items-center">
                {/* Name */}
                <p className="font-bold text-xl text-black mb-5">{name}</p>

                {/* Text */}
                <p className="text-center text-dark-grayish-blue  lg:px-7">
                    {text}
                </p>
            </div>
        </div>
    );
}
