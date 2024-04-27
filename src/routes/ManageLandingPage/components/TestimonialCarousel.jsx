import { Flowbite, Carousel } from "flowbite-react";

import data from "../data.json";
import TestimonialItem from "./TestimonialItem";

const testimonialsData = data.testimonials;

// Carousel imported from package flowbite, this removes the left/right indicator icons and changes the colors of the indicator dots
const customTheme = {
    carousel: {
        root: {
            base: "relative h-full w-full",
            leftControl: "hidden",
            rightControl: "hidden",
        },
        indicators: {
            active: {
                off: "border-[1px] border-bright-red/50 hover:bg-bright-red dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-bright-red dark:bg-gray-800",
            },
        },
    },
};

export default function TestimonialCarousel() {
    return (
        <div className="lg:hidden">
            <Flowbite theme={{ theme: customTheme }}>
                <Carousel slideInterval={2000} className="pb-10">
                    {testimonialsData.map((item) => (
                        <TestimonialItem
                            key={item.name}
                            name={item.name}
                            text={item.text}
                            image={item.image}
                        />
                    ))}
                </Carousel>
            </Flowbite>
        </div>
    );
}
