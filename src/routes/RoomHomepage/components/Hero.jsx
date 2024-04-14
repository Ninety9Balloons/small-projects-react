import { useState } from "react";

export default function Hero() {
    const [item, setItem] = useState(1);

    function handlePrevious() {
        if (item === 1) {
            setItem(3);
        } else {
            setItem(item - 1);
        }
    }

    function handleNext() {
        if (item === 3) {
            setItem(1);
        } else {
            setItem(item + 1);
        }
    }

    let itemHeader;
    let itemText;
    switch (item) {
        case 1:
            itemHeader = "Discover innovative ways to decorate";
            itemText =
                "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
            break;
        case 2:
            itemHeader = "We are available all across the globe";
            itemText =
                "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
            break;
        case 3:
            itemHeader = "Manufactured with the best materials";
            itemText =
                "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
            break;
        default:
            console.log("Error");
    }

    return (
        <div className="w-full flex flex-col lg:flex-row">
            {/* Image container */}
            <div className="w-full relative lg:w-[60%]">
                <img
                    src={`assets/images/room-homepage/mobile-image-hero-${item}.jpg`}
                    alt="hero image"
                    className="object-fill w-full lg:hidden"
                />
                <img
                    src={`assets/images/room-homepage/desktop-image-hero-${item}.jpg`}
                    alt="hero image"
                    className="object-fill w-full hidden lg:block"
                />

                {/* Arrow container Mobile */}
                <div className="flex lg:hidden absolute right-0 bottom-0">
                    <img
                        src="assets/images/room-homepage/icon-angle-left.svg"
                        alt="left arrow"
                        className="cursor-pointer bg-black p-3"
                        onClick={handlePrevious}
                    />
                    <img
                        src="assets/images/room-homepage/icon-angle-right.svg"
                        alt="right arrow"
                        className="cursor-pointer bg-black p-3"
                        onClick={handleNext}
                    />
                </div>
            </div>

            {/* Text */}
            <div className="flex flex-col lg:justify-center lg:relative px-5 lg:px-10 py-10 lg:w-[40%]">
                {/* Arrow container Desktop */}
                <div className="hidden lg:flex absolute left-0 bottom-0">
                    <img
                        src="assets/images/room-homepage/icon-angle-left.svg"
                        alt="left arrow"
                        className="cursor-pointer bg-black transition-all hover:bg-very-dark-gray p-3"
                        onClick={handlePrevious}
                    />
                    <img
                        src="assets/images/room-homepage/icon-angle-right.svg"
                        alt="right arrow"
                        className="cursor-pointer bg-black p-3 transition-all hover:bg-very-dark-gray p-3"
                        onClick={handleNext}
                    />
                </div>

                {/* Header */}
                <h1 className="text-4xl font-bold mb-4">{itemHeader}</h1>

                {/* Body */}
                <p className="text-dark-gray">{itemText}</p>

                {/* Call to action */}
                <button className="flex py-5 items-center gap-5 uppercase tracking-[.35em] font-semibold cursor-pointer transition-all hover:text-dark-gray p-3">
                    <span>Shop</span> <span>now</span>{" "}
                    <img
                        src="assets/images/room-homepage/icon-arrow.svg"
                        alt="right arrow shop now"
                    />
                </button>
            </div>
        </div>
    );
}
