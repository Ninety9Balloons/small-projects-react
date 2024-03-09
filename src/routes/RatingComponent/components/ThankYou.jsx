import Button from "./Button";

/* eslint-disable react/prop-types */
function ThankYou({ number, clicked, setClicked, setNumber }) {
    return (
        // {/* Main */}
        <div
            className={
                clicked
                    ? "flex flex-col justify-between items-center bg-secondary rounded-xl p-7 w-[350px] h-[400px]"
                    : "hidden"
            }
        >
            {/* Image */}
            <div>
                <img
                    src="assets/images/ratingcomponent/illustration-thank-you.svg"
                    alt="Thank you image"
                />
            </div>

            {/* Rating */}
            <div>
                <p className="text-xs text-accent bg-primary rounded-full py-1 px-3">
                    You selected {number} out of 5
                </p>
            </div>

            {/* Text */}
            <div>
                <h2 className="font-bold text-2xl mb-3 text-center">
                    Thank you!
                </h2>
                <p className="text-slate-300 text-sm text-center">
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don&apos;t hesitate to get in touch!
                </p>
            </div>

            {/* Button */}
            <Button
                clicked={clicked}
                setClicked={setClicked}
                setNumber={setNumber}
                text="Back"
            />
        </div>
    );
}

export default ThankYou;
