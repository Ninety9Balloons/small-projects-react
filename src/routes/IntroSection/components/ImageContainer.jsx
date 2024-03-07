function ImageContainer() {
    return (
        <div>
            <img
                src="/assets/images/introsection/image-hero-mobile.png"
                alt="mobile hero image"
                className="mt-5 block md:hidden"
            />
            <img
                src="/assets/images/introsection/image-hero-desktop.png"
                alt="mobile hero image"
                className="mt-5 hidden md:block"
            />
        </div>
    );
}

export default ImageContainer;
