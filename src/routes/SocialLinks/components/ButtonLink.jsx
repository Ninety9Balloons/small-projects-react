/* eslint-disable react/prop-types */
function ButtonLink({ text }) {
    return (
        <button className="flex justify-center items-center w-[300px] py-3 rounded-lg bg-accent hover:bg-primary hover:text-secondary transition-all mt-4 shadow-sm">
            {text}
        </button>
    );
}

export default ButtonLink;
