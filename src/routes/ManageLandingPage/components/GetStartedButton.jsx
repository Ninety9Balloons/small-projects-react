/* eslint-disable react/prop-types */
export default function GetStartedButton({ bgColor, text }) {
    return (
        <button
            className={`bg-${bgColor} text-${text} hover:brightness-125 transition-all py-3 px-7 text-sm rounded-full my-10 shadow-[0_10px_10px_0px_rgba(242,95,58,0.3)] cursor-pointer`}
        >
            Get Started
        </button>
    );
}
