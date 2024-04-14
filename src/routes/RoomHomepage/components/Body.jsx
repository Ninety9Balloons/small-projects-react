export default function Body() {
    return (
        <div className="lg:flex lg:h-[300px]">
            {/* Top image */}
            <img
                src="assets/images/room-homepage/image-about-dark.jpg"
                alt="top bodyimage"
                className="object-fill w-full lg:w-[30%]"
            />

            {/* Text */}
            <div className="flex flex-col px-5 py-10 lg:w-[40%]">
                <h2 className="text-lg font-bold uppercase tracking-widest mb-5 lg:mb-3">
                    About our furniture
                </h2>
                <p className="text-dark-gray">
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </div>

            {/* Bottom image */}
            <img
                src="assets/images/room-homepage/image-about-light.jpg"
                alt="bottom bodyimage"
                className="object-cover h-full lg:w-[30%]"
            />
        </div>
    );
}
