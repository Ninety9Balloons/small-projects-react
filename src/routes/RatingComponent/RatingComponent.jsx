import { useState } from "react";
import Circle from "./components/Circle";
import ThankYou from "./components/ThankYou";
import Button from "./components/Button";

function RatingComponent() {
    const [number, setNumber] = useState("");
    const [clicked, setClicked] = useState(false);

    return (
        <div className="flex justify-center items-center h-full text-primary">
            {/* Main */}
            <div
                // If Submit is clicked, hide the rating component
                className={
                    !clicked
                        ? "flex flex-col justify-between bg-secondary rounded-xl p-7 w-[350px] h-[400px]"
                        : "hidden"
                }
            >
                {/* Top Star */}
                <div>
                    <img
                        src="assets/images/ratingcomponent/icon-star.svg"
                        alt="Star icon"
                        className="bg-accent-3 p-3 rounded-full"
                    />
                </div>

                {/* Text */}
                <div>
                    <h2 className="font-bold text-2xl mb-3">How did we do?</h2>
                    <p className="text-slate-300">
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our
                        offering!
                    </p>
                </div>

                {/* Score Scale */}
                <div className="flex justify-between w-full">
                    {/* Set the number state to the number value that was clicked */}
                    <Circle
                        handleClick={(e) => setNumber(e.target.textContent)}
                        content="1"
                        selected={
                            number === "1"
                                ? "bg-primary text-accent"
                                : "bg-accent-3"
                        }
                    />
                    <Circle
                        handleClick={(e) => setNumber(e.target.textContent)}
                        content="2"
                        selected={
                            number === "2"
                                ? "bg-primary text-accent"
                                : "bg-accent-3"
                        }
                    />
                    <Circle
                        handleClick={(e) => setNumber(e.target.textContent)}
                        content="3"
                        selected={
                            number === "3"
                                ? "bg-primary text-accent"
                                : "bg-accent-3"
                        }
                    />
                    <Circle
                        handleClick={(e) => setNumber(e.target.textContent)}
                        content="4"
                        selected={
                            number === "4"
                                ? "bg-primary text-accent"
                                : "bg-accent-3"
                        }
                    />
                    <Circle
                        handleClick={(e) => setNumber(e.target.textContent)}
                        content="5"
                        selected={
                            number === "5"
                                ? "bg-primary text-accent"
                                : "bg-accent-3"
                        }
                    />
                </div>

                {/* Button */}
                <div>
                    <Button
                        text="Submit"
                        clicked={clicked}
                        setClicked={setClicked}
                        number={number}
                    />
                </div>
            </div>

            {/* // If Submit is clicked, show the thank you component */}
            <ThankYou
                number={number}
                setNumber={setNumber}
                clicked={clicked}
                setClicked={setClicked}
            />
        </div>
    );
}

export default RatingComponent;
