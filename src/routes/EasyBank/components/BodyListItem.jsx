/* eslint-disable react/prop-types */
export default function BodyListItem({ image, title, text }) {
    return (
        <div className="flex flex-col items-center lg:items-start lg:gap-3 p-5">
            {/* Image */}
            <img src={image} />

            {/* Subheading */}
            <h3 className="text-2xl font-semibold my-3">{title}</h3>

            {/* Text */}
            <p className="text-center lg:text-left text-grayish-blue">{text}</p>
        </div>
    );
}
