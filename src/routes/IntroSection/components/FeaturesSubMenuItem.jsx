/* eslint-disable react/prop-types */
function FeaturesSubMenuItem({ icon, text }) {
    return (
        <div className="flex gap-3">
            <img
                src={icon}
                alt="Todo icon"
                className="w-5 h-5 object-contain"
            />
            <p className="font-bold text-gray-500">{text}</p>
        </div>
    );
}

export default FeaturesSubMenuItem;
