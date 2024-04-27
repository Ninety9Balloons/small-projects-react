import data from "../data.json";
import GetStartedButton from "./GetStartedButton";
import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialItem from "./TestimonialItem";

const testimonialsData = data.testimonials;

export default function Testimonials() {
    return (
        <div className="flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mt-20 mb-10 w-full">
                What they've said
            </h2>

            {/* Items Mobile */}
            <TestimonialCarousel />

            {/* Items Desktop Infinite Scroll */}
            <div className="hidden lg:flex w-screen max-w-[1920px] flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {testimonialsData.map((item) => (
                        <li key={item.name}>
                            <TestimonialItem
                                image={item.image}
                                name={item.name}
                                text={item.text}
                            />
                        </li>
                    ))}
                </ul>

                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true"
                >
                    {testimonialsData.map((item) => (
                        <li key={item.name}>
                            <TestimonialItem
                                image={item.image}
                                name={item.name}
                                text={item.text}
                            />
                        </li>
                    ))}
                </ul>

                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true"
                >
                    {testimonialsData.map((item) => (
                        <li key={item.name}>
                            <TestimonialItem
                                image={item.image}
                                name={item.name}
                                text={item.text}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Get Started Button */}
            <GetStartedButton bgColor="bright-red" text="white" />
        </div>
    );
}
