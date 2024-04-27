import DifferentItem from "./DifferentItem";
import data from "../data.json";

const differentData = data.different;

export default function WhatsDifferent() {
    return (
        <div className="md:flex md:gap-10">
            {/* Title Text */}
            <div className="md:flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left py-5 md:w-[80%]">
                    What’s different about Manage?
                </h2>

                <p className="text-dark-grayish-blue text-center  md:text-left md:w-[50%]">
                    Manage provides all the functionality your team needs,
                    without the complexity. Our software is tailor-made for
                    modern digital product teams.
                </p>
            </div>

            {/* Item List */}
            <div className="flex flex-col gap-10 mt-10 md:flex-1">
                {differentData.map((item) => (
                    <DifferentItem
                        key={item.number}
                        number={item.number}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}
