import Carousel from "./Carousel";

export default function SpecialOffers() {
    return (
        <div className="py-4 px-2 w-full">
            {/* Title */}
            <h2 className="uppercase text-white text-sm">Special Offers</h2>

            {/* Carosaul Container */}
            <div className="w-full overflow-x-auto">
                <Carousel />
            </div>
        </div>
    );
}
