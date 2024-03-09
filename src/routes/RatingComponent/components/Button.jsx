import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Button({ clicked, setClicked, text, number, setNumber }) {
    const [buttonText, setButtonText] = useState(text);

    // On click, if there's no number state, change button text to reflect error else change click state
    function handleClick() {
        if (!clicked && number === "") {
            setButtonText("Please select a number");
        } else {
            setClicked(!clicked);
        }

        // On thank you page click, reset number state and change click state
        if (clicked) {
            setNumber("");
            setClicked(!clicked);
        }
    }

    // If submit was clicked and error text shown, when clicking a number remove error text and go back to Submit text
    useEffect(() => {
        if (number !== "") {
            setButtonText(text);
        }
    }, [number]);

    return (
        <button
            className="w-full bg-accent-1 rounded-xl py-2 transition-all hover:bg-primary hover:text-accent"
            onClick={() => handleClick()}
        >
            {buttonText}
        </button>
    );
}

export default Button;
