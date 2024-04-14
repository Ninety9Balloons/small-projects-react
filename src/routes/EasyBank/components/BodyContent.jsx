import data from "../data.json";
import BodyListItem from "./BodyListItem";

const bodyData = data.whyChoose;

export default function BodyContent() {
    return (
        <div className="bg-light-grayish-blue w-full py-20 flex flex-col items-center lg:items-start px-5">
            {/* Top */}
            <div className="mb-5">
                {/* Heading */}
                <h2 className="text-3xl px-10 font-semibold text-center lg:text-5xl lg:font-normal lg:text-left lg:p-0">
                    Why choose Easybank?
                </h2>

                {/* Text */}
                <p className="py-6 text-grayish-blue text-center lg:text-left lg:w-[70%]">
                    We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before.
                </p>
            </div>

            {/* Items */}
            <div className="flex flex-col lg:flex-row">
                {bodyData.map((item) => (
                    <BodyListItem
                        key={item.title}
                        image={item.image}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}
