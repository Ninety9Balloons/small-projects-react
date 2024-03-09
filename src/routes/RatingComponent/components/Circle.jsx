/* eslint-disable react/prop-types */
function Circle({ content, handleClick, selected }) {
    return (
        <div
            className={`flex justify-center items-center w-10 h-10 ${selected} p-3 rounded-full transition-all md:hover:bg-accent-1 cursor-pointer`}
            onClick={(e) => handleClick(e)}
        >
            {content}
        </div>
    );
}

export default Circle;
