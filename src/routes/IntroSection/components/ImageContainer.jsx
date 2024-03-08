function ImageContainer() {
    return (
        <div className="flex flex-1 h-full">
            <img
                src="/assets/images/introsection/image-hero-mobile.png"
                alt="mobile hero image"
                className="mt-5 block md:hidden"
            />
            <img
                src="/assets/images/introsection/image-hero-desktop.png"
                alt="desktop hero image"
                className="mt-10 hidden md:block object-contain"
            />
        </div>
    );
}

export default ImageContainer;
