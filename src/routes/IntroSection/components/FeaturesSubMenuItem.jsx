/* eslint-disable react/prop-types */
function FeaturesSubMenuItem({ icon, text }) {
    return (
        <div className="flex gap-3 cursor-pointer ">
            <img
                src={icon}
                alt={`${icon} icon`}
                className="w-5 h-5 object-contain"
            />
            <p className="font-bold text-gray-500 hover:text-black">{text}</p>
        </div>
    );
}

export default FeaturesSubMenuItem;
