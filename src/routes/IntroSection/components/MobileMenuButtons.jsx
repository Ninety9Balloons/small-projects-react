/* eslint-disable react/prop-types */
function MobileMenuButtons({ text, img, handleClick }) {
    return (
        <button
            className="flex items-center font-bold tracking-wide text-gray-500 text-lg md:hover:text-black focus:text-black"
            onClick={handleClick}
        >
            {text}
            <img
                src={`assets/images/introsection/${img}`}
                alt="Down arrow"
                className={img === "" ? "hidden" : "ml-3 md:ml-2 "}
            />
        </button>
    );
}

export default MobileMenuButtons;
