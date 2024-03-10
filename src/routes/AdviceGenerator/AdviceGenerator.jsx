import { useEffect, useState } from "react";

function AdviceGenerator() {
    const [advice, setAdvice] = useState();

    function getAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then((res) => res.json())
            .then((json) => {
                setAdvice(json);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((res) => res.json())
            .then((json) => {
                setAdvice(json);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="flex justify-center items-center h-full">
            {/* Main */}
            <div className="flex flex-col items-center justify-between p-5 bg-secondary w-[350px] h-[350px] md:w-[450px] rounded-xl relative shadow-lg">
                {/* Text */}
                <div className="flex flex-col items-center h-full">
                    <div className="h-[25%] flex items-center">
                        <p className="tracking-widest text-accent  text-xs uppercase">
                            Advice #{advice?.slip?.id}
                        </p>
                    </div>

                    <div className="h-[50%] flex items-center justify-center">
                        <h2 className="text-center text-2xl text-primary leading-relaxed">
                            {!advice
                                ? "Getting Advice"
                                : `"${advice?.slip?.advice}"`}
                        </h2>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center h-[25%]">
                        {/* Mobile */}
                        <img
                            src="assets/images/advicegenerator/pattern-divider-mobile.svg"
                            alt="Line pattern divider"
                            className="block md:hidden"
                        />
                        {/* Desktop */}
                        <img
                            src="assets/images/advicegenerator/pattern-divider-desktop.svg"
                            alt="Line pattern divider"
                            className="hidden md:block"
                        />
                    </div>
                </div>

                {/* Button */}
                <div className="absolute -bottom-7">
                    <button
                        onClick={() => getAdvice()}
                        className="p-4 bg-accent-3 rounded-full md:hover:bg-accent-1 md:hover:shadow-[0_0px_30px_0px_rgba(227,105,0,1)] transition-all"
                    >
                        <img
                            src="assets/images/advicegenerator/icon-dice.svg"
                            alt="Dice icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdviceGenerator;
