export default function Shorten() {
    return (
        <div className="w-full  md:max-w-[800px] flex flex-col items-center rounded-xl relative mt-16">
            {/* Background */}
            <div className="absolute w-full h-full bg-dark-violet rounded-xl z-10 overflow-hidden">
                <img
                    src="assets/images/url-shortening/bg-shorten-mobile.svg"
                    alt="background"
                    className="md:hidden rounded-xl absolute z-10 w-full h-full -right-32 -top-10"
                />
                <img
                    src="assets/images/url-shortening/bg-shorten-desktop.svg"
                    alt="background"
                    className="hidden md:block rounded-xl absolute z-10 w-full h-full -right-32 -top-10"
                />
            </div>
            <div className="absolute w-screen mx-auto h-full bg-gray/10 z-0 bottom-0 h-1/2"></div>

            {/* Form */}
            <form className="flex flex-col md:flex-row gap-4 z-10 w-full p-5 md:p-10 items-center justify-between h-full">
                {/* Input */}
                <input
                    type="url"
                    className="w-full p-3 rounded-lg"
                    placeholder="Shorten a link here..."
                />

                {/* Button */}
                <button
                    type="submit"
                    className="w-full md:w-[20%] p-3 rounded-lg bg-cyan text-white font-semibold hover:brightness-110 transition-all"
                >
                    Shorten It!
                </button>
            </form>
        </div>
    );
}
