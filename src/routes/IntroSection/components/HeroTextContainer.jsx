import FooterContainer from "./FooterContainer";

function HeroTextContainer() {
    return (
        <div className="flex flex-1 flex-col items-center md:items-start md:justify-center h-full py-10 px-4 md:p-0   relative">
            <h2 className="text-4xl md:text-6xl font-bold">Make remote work</h2>

            <p className="my-5 md:my-10 text-center md:text-left text-gray-600">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
            </p>

            <button className="bg-primary hover:bg-white rounded-xl px-4 md:px-5 py-2 md:py-3 text-primary font-bold hover:text-black border border-solid border-black transition-all">
                Learn more
            </button>

            <div className="hidden md:flex absolute bottom-5">
                {/* Footer Icons Desktop */}
                <FooterContainer />
            </div>
        </div>
    );
}

export default HeroTextContainer;
